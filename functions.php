<?php
// functions.php
declare(strict_types=1);
require_once __DIR__ . '/db_connect.php';

/** -------------- UTIL ------------------ */
function e(string $s): string { return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }
function now(): string { return (new DateTime('now'))->format('Y-m-d H:i:s'); }

/** -------------- SESSION & CSRF -------------- */
function csrf_token(): string {
    start_secure_session();
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf'];
}
function require_csrf(string $token): void {
    start_secure_session();
    if (empty($_SESSION['csrf']) || !hash_equals($_SESSION['csrf'], $token)) {
        throw new RuntimeException('Token CSRF non valido.');
    }
}

/** -------------- PASSWORD SHA-256 (salt+pepper+iterazioni) -------------- */
function hash_password_with_salt(string $password, ?string $salt = null): array {
    if ($salt === null) {
        $salt = bin2hex(random_bytes(16)); // 32 hex chars
    }
    $pepper = PEPPER;
    $h = hash('sha256', $pepper . $salt . $password);
    for ($i = 0; $i < HASH_ITERATIONS; $i++) {
        $h = hash('sha256', $h . $pepper);
    }
    return ['salt' => $salt, 'hash' => $h];
}
function verify_password(string $password, string $salt, string $expected_hash): bool {
    $arr = hash_password_with_salt($password, $salt);
    return hash_equals($expected_hash, $arr['hash']);
}

/** -------------- AUTH -------------- */
function create_user(string $email, string $nome, string $password, string $ruolo = 'docente'): int {
    $email = mb_strtolower(trim($email));
    $pdo = pdo();
    $st = $pdo->prepare("SELECT id FROM utenti WHERE email = ?");
    $st->execute([$email]);
    if ($st->fetch()) throw new RuntimeException('Email già registrata.');
    $ph = hash_password_with_salt($password);
    $st = $pdo->prepare("INSERT INTO utenti (`email`,`nome`,`ruolo`,`salt`,`password_hash`,`created_at`) VALUES (?,?,?,?,?,?)");
    $st->execute([$email, $nome, $ruolo, $ph['salt'], $ph['hash'], now()]);
    return (int)$pdo->lastInsertId();
}
function login_user(string $email, string $password): bool {
    start_secure_session();
    $email = mb_strtolower(trim($email));
    $pdo = pdo();
    $st = $pdo->prepare("SELECT id, email, nome, ruolo, salt, password_hash, is_active FROM utenti WHERE email = ?");
    $st->execute([$email]);
    $u = $st->fetch();
    if (!$u || !(bool)$u['is_active']) return false;
    if (!verify_password($password, $u['salt'], $u['password_hash'])) return false;
    $_SESSION['user'] = [
        'id'    => (int)$u['id'],
        'email' => $u['email'],
        'nome'  => $u['nome'],
        'ruolo' => $u['ruolo'],
        'time'  => time(),
    ];
    return true;
}
function current_user(): ?array {
    start_secure_session();
    return $_SESSION['user'] ?? null;
}
function require_login(): void {
    if (!current_user()) { header('Location: index.php'); exit; }
}
function require_role(string $role): void {
    $u = current_user();
    if (!$u || ($u['ruolo'] ?? '') !== $role) {
        header('HTTP/1.1 403 Forbidden'); echo 'Accesso negato.'; exit;
    }
}
function logout_user(): void {
    start_secure_session();
    $_SESSION = [];
    if (ini_get("session.use_cookies")) {
        $p = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000, $p["path"], $p["domain"], $p["secure"], $p["httponly"]);
    }
    session_destroy();
}

/** -------------- RESET PASSWORD (email) -------------- */
function send_mail_simple(string $to, string $subject, string $html): bool {
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: Boccioni Iscrizioni <no-reply@altervista.org>\r\n";
    return mail($to, $subject, $html, $headers);
}
function start_password_reset(string $email): void {
    $pdo = pdo();
    $email = mb_strtolower(trim($email));
    $st = $pdo->prepare("SELECT id FROM utenti WHERE email = ?");
    $st->execute([$email]);
    $u = $st->fetch();
    if (!$u) return;
    $user_id = (int)$u['id'];
    $token = bin2hex(random_bytes(32));
    $expires = (new DateTime('+1 hour'))->format('Y-m-d H:i:s');
    $pdo->prepare("INSERT INTO password_resets (user_id, token, expires_at) VALUES (?,?,?)")
        ->execute([$user_id, $token, $expires]);
    $link = rtrim(BASE_URL, '/') . '/reset_password.php?token=' . urlencode($token);
    $html = "<p>Hai richiesto il reset della password.</p>
             <p>Clicca qui per impostarne una nuova (valido 1 ora):<br>
             <a href='{$link}'>{$link}</a></p>
             <p>Se non hai richiesto tu il reset, ignora questa email.</p>";
    send_mail_simple($email, 'Reset password – Iscrizioni Boccioni', $html);
}
function complete_password_reset(string $token, string $new_password): bool {
    $pdo = pdo();
    $st = $pdo->prepare("SELECT pr.id, pr.user_id, pr.expires_at, pr.used FROM password_resets pr WHERE pr.token = ?");
    $st->execute([$token]);
    $r = $st->fetch();
    if (!$r || (int)$r['used'] === 1) return false;
    if (new DateTime($r['expires_at']) < new DateTime('now')) return false;
    $ph = hash_password_with_salt($new_password);
    $pdo->beginTransaction();
    try {
        $pdo->prepare("UPDATE utenti SET salt = ?, password_hash = ?, updated_at = ? WHERE id = ?")
            ->execute([$ph['salt'], $ph['hash'], now(), (int)$r['user_id']]);
        $pdo->prepare("UPDATE password_resets SET used = 1 WHERE id = ?")
            ->execute([(int)$r['id']]);
        $pdo->commit();
        return true;
    } catch (Throwable $e) {
        $pdo->rollBack();
        throw $e;
    }
}

/** -------------- CORSI (READ) -------------- */
function get_all_corsi(): array {
    $pdo = pdo();
    $sql = "SELECT `ID Corso`,`Titolo Corso`,`Docente`,`Tipologia`,`Disciplina`,`Periodo`,
                   `Giorno della settimana`,`Orario`,`Anno Scolastico destinatario`,
                   `Indirizzo`,`Posti disponibili`,`Prerequisiti`,`Competenze in uscita`,`Descrizione`
            FROM `corsi`
            ORDER BY `Titolo Corso` ASC";
    return $pdo->query($sql)->fetchAll();
}
function get_posti_occupati(int $idCorso): int {
    $pdo = pdo();
    $st = $pdo->prepare("SELECT COUNT(*) AS c FROM `iscrizioni` WHERE `Corsi selezionati (ID)` = ?");
    $st->execute([$idCorso]);
    return (int)$st->fetchColumn();
}
function get_posti_liberi(int $idCorso): ?int {
    $pdo = pdo();
    $st = $pdo->prepare("SELECT `Posti disponibili` FROM `corsi` WHERE `ID Corso` = ?");
    $st->execute([$idCorso]);
    $posti = $st->fetchColumn();
    if ($posti === false) return null;
    $posti = (int)$posti;
    $occ = get_posti_occupati($idCorso);
    return max(0, $posti - $occ);
}

/** -------------- CORSI (CRUD per docenti) -------------- */
function create_corso(array $data): void {
    validate_corso_data($data, true);
    $pdo = pdo();
    // verifica unicità ID
    $st = $pdo->prepare("SELECT 1 FROM `corsi` WHERE `ID Corso`=?");
    $st->execute([$data['ID Corso']]);
    if ($st->fetch()) throw new RuntimeException('ID Corso già esistente.');
    $sql = "INSERT INTO `corsi` 
      (`ID Corso`,`Titolo Corso`,`Docente`,`Tipologia`,`Disciplina`,`Periodo`,
       `Giorno della settimana`,`Orario`,`Anno Scolastico destinatario`,
       `Indirizzo`,`Posti disponibili`,`Prerequisiti`,`Competenze in uscita`,`Descrizione`)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    pdo()->prepare($sql)->execute([
        $data['ID Corso'], $data['Titolo Corso'], $data['Docente'], $data['Tipologia'],
        $data['Disciplina'], $data['Periodo'], $data['Giorno della settimana'], $data['Orario'],
        $data['Anno Scolastico destinatario'], $data['Indirizzo'], $data['Posti disponibili'],
        $data['Prerequisiti'], $data['Competenze in uscita'], $data['Descrizione']
    ]);
}
function update_corso(int $id, array $data): void {
    if ($id <= 0) throw new RuntimeException('ID Corso non valido.');
    validate_corso_data($data, false);
    $sql = "UPDATE `corsi` SET 
      `Titolo Corso`=?,`Docente`=?,`Tipologia`=?,`Disciplina`=?,`Periodo`=?,
      `Giorno della settimana`=?,`Orario`=?,`Anno Scolastico destinatario`=?,
      `Indirizzo`=?,`Posti disponibili`=?,`Prerequisiti`=?,`Competenze in uscita`=?,`Descrizione`=?
      WHERE `ID Corso`=?";
    pdo()->prepare($sql)->execute([
        $data['Titolo Corso'], $data['Docente'], $data['Tipologia'], $data['Disciplina'], $data['Periodo'],
        $data['Giorno della settimana'], $data['Orario'], $data['Anno Scolastico destinatario'],
        $data['Indirizzo'], $data['Posti disponibili'], $data['Prerequisiti'],
        $data['Competenze in uscita'], $data['Descrizione'], $id
    ]);
}
function delete_corso(int $id): void {
    if ($id <= 0) throw new RuntimeException('ID non valido.');
    // blocca delete se esistono iscrizioni
    $st = pdo()->prepare("SELECT COUNT(*) FROM `iscrizioni` WHERE `Corsi selezionati (ID)`=?");
    $st->execute([$id]);
    if ((int)$st->fetchColumn() > 0) {
        throw new RuntimeException('Impossibile eliminare: esistono iscrizioni a questo corso.');
    }
    pdo()->prepare("DELETE FROM `corsi` WHERE `ID Corso`=?")->execute([$id]);
}
function validate_corso_data(array $d, bool $create): void {
    if ($create && (int)($d['ID Corso'] ?? 0) <= 0) throw new RuntimeException('ID Corso richiesto.');
    if (trim($d['Titolo Corso'] ?? '')==='') throw new RuntimeException('Titolo Corso richiesto.');
    if (!isset($d['Posti disponibili'])) $d['Posti disponibili']=0;
}

/** -------------- ISCRIZIONE STUDENTE -------------- */
function registra_iscrizione(string $nome, string $cognome, string $classe, string $email, int $idCorso): void {
    $pdo = pdo();
    $st = $pdo->prepare("SELECT 1 FROM `iscrizioni` WHERE `Email` = ? AND `Corsi selezionati (ID)` = ?");
    $st->execute([$email, $idCorso]);
    if ($st->fetch()) throw new RuntimeException('Sei già iscritto a questo corso.');
    $liberi = get_posti_liberi($idCorso);
    if ($liberi !== null && $liberi < 1) throw new RuntimeException('Posti esauriti per questo corso.');
    $sql = "INSERT INTO `iscrizioni`
            (`Timestamp`,`Nome`,`Cognome`,`Classe`,`Email`,`Corsi selezionati (ID)`)
            VALUES (CURRENT_TIMESTAMP(3),?,?,?,?,?)";
    $pdo->prepare($sql)->execute([$nome, $cognome, $classe, $email, $idCorso]);
}


// Quante iscrizioni ha già fatto questo studente (per e-mail)
function count_iscrizioni_by_email(string $email): int {
    $pdo = pdo();
    $st = $pdo->prepare("SELECT COUNT(*) FROM `iscrizioni` WHERE `Email` = ?");
    $st->execute([mb_strtolower(trim($email))]);
    return (int)$st->fetchColumn();
}

function is_school_email(string $email): bool {
    $email = mb_strtolower(trim($email));
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) return false;
    // cognome.nome@stu.lasboccioni.it (solo lettere ASCII e un punto fra cognome/nome)
    return (bool)preg_match('/^[a-z]+(?:\.[a-z]+)@stu\.lasboccioni\.it$/', $email);
}


/**
 * Iscrive a più corsi in un colpo solo (max totale 4 per studente).
 * Ritorna un array con: ok (n° inserite), fail (n° errori), inserted_ids, errors (per ID corso).
 */
function registra_iscrizioni_multiple(string $nome, string $cognome, string $classe, string $email, array $idCorsi): array {
    $email  = mb_strtolower(trim($email));
    $nome   = trim($nome);
    $cognome= trim($cognome);
    $classe = trim($classe);

   if ($nome==='' || $cognome==='' || $classe==='') {
    throw new RuntimeException('Compila correttamente Nome, Cognome e Classe.');
}
if (!is_school_email($email)) {
    throw new RuntimeException('Email non valida. Usa il formato cognome.nome@stu.lasboccioni.it');
}


    // pulizia e dedup
    $ids = [];
    foreach ($idCorsi as $id) {
        $i = (int)$id;
        if ($i > 0 && !in_array($i, $ids, true)) $ids[] = $i;
    }
    if (empty($ids)) throw new RuntimeException('Seleziona almeno un corso.');

    // Limiti
    $MAX_TOTAL = 4;
    $MAX_TRI   = 2;
    $MAX_PENTA = 2;

    // Esistenti per questo studente
    $existing = get_counts_by_period_for_email($email);
    $remTotal = max(0, $MAX_TOTAL - $existing['total']);
    $remTri   = max(0, $MAX_TRI   - $existing['trimestre']);
    $remPenta = max(0, $MAX_PENTA - $existing['pentamestre']);

    // Periodi nella selezione corrente
    $selTri = 0; $selPenta = 0; $selOther = 0;
    foreach ($ids as $cid) {
        $p = get_periodo_for_corso($cid);
        if ($p === 'trimestre') $selTri++;
        elseif ($p === 'pentamestre') $selPenta++;
        else $selOther++;
    }

    // Verifiche aggregate prima di inserire
    $errs = [];
    if (count($ids) > $remTotal) {
        $errs[] = "Puoi selezionare al massimo {$remTotal} corsi (hai già {$existing['total']} su {$MAX_TOTAL}).";
    }
    if ($selTri > $remTri) {
        $errs[] = "Trimestre: puoi aggiungere al massimo {$remTri} corso/i (hai già {$existing['trimestre']} su {$MAX_TRI}).";
    }
    if ($selPenta > $remPenta) {
        $errs[] = "Pentamestre: puoi aggiungere al massimo {$remPenta} corso/i (hai già {$existing['pentamestre']} su {$MAX_PENTA}).";
    }
    if ($errs) throw new RuntimeException(implode(' ', $errs));

    // Inserimenti (capienza/duplicati già gestiti da registra_iscrizione)
    $ok = 0; $fail = 0; $inserted = []; $errors = [];
    foreach ($ids as $cid) {
        try {
            registra_iscrizione($nome, $cognome, $classe, $email, $cid);
            $ok++; $inserted[] = $cid;
        } catch (Throwable $e) {
            $fail++; $errors[$cid] = $e->getMessage();
        }
    }
    return ['ok'=>$ok, 'fail'=>$fail, 'inserted_ids'=>$inserted, 'errors'=>$errors];
}


// Normalizza il valore "Periodo" in uno dei bucket: 'trimestre', 'pentamestre' o null
function normalize_periodo(?string $s): ?string {
    if (!$s) return null;
    $t = mb_strtolower(trim($s));
    $t = str_replace(['–','—'], '-', $t); // trattini tipografici
    if (strpos($t, 'trim') !== false)  return 'trimestre';
    if (strpos($t, 'penta') !== false) return 'pentamestre';
    return null; // altri testi/ignoti
}

// Conta quante iscrizioni ha già uno studente per periodo
function get_counts_by_period_for_email(string $email): array {
    $pdo = pdo();
    $st = $pdo->prepare(
        "SELECT c.`Periodo`
         FROM `iscrizioni` i
         JOIN `corsi` c ON c.`ID Corso` = i.`Corsi selezionati (ID)`
         WHERE i.`Email` = ?"
    );
    $st->execute([mb_strtolower(trim($email))]);
    $total = 0; $tri = 0; $penta = 0;
    while ($row = $st->fetch()) {
        $total++;
        $p = normalize_periodo($row['Periodo'] ?? null);
        if ($p === 'trimestre') $tri++;
        elseif ($p === 'pentamestre') $penta++;
    }
    return ['total'=>$total, 'trimestre'=>$tri, 'pentamestre'=>$penta];
}

// Ritorna il periodo normalizzato per un corso
function get_periodo_for_corso(int $id): ?string {
    $st = pdo()->prepare("SELECT `Periodo` FROM `corsi` WHERE `ID Corso`=?");
    $st->execute([$id]);
    $per = $st->fetchColumn();
    return normalize_periodo($per !== false ? (string)$per : null);
}




