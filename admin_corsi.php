<?php
require_once __DIR__ . '/functions.php';
require_login();
require_role('docente');

$err = null;
$msg = null;

// CREATE / UPDATE / DELETE
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        require_csrf($_POST['csrf'] ?? '');
        $action = $_POST['action'] ?? '';

        if ($action === 'create' || $action === 'update') {
            $data = [
                'ID Corso'                     => (int)($_POST['ID_Corso'] ?? 0),
                'Titolo Corso'                 => trim($_POST['Titolo_Corso'] ?? ''),
                'Docente'                      => trim($_POST['Docente'] ?? ''),
                'Tipologia'                    => trim($_POST['Tipologia'] ?? ''),
                'Disciplina'                   => trim($_POST['Disciplina'] ?? ''),
                'Periodo'                      => trim($_POST['Periodo'] ?? ''),
                'Giorno della settimana'       => trim($_POST['Giorno_della_settimana'] ?? ''),
                'Orario'                       => trim($_POST['Orario'] ?? ''),
                'Anno Scolastico destinatario' => trim($_POST['Anno_Scolastico_destinatario'] ?? ''),
                'Indirizzo'                    => trim($_POST['Indirizzo'] ?? ''),
                'Posti disponibili'            => (int)($_POST['Posti_disponibili'] ?? 0),
                'Prerequisiti'                 => trim($_POST['Prerequisiti'] ?? ''),
                'Competenze in uscita'         => trim($_POST['Competenze_in_uscita'] ?? ''),
                'Descrizione'                  => trim($_POST['Descrizione'] ?? ''),
            ];

            if ($action === 'create') {
                create_corso($data);
                $msg = 'Corso creato.';
            } else {
                update_corso((int)$data['ID Corso'], $data);
                $msg = 'Corso aggiornato.';
            }
        } elseif ($action === 'delete') {
            $id = (int)($_POST['ID_Corso'] ?? 0);
            delete_corso($id);
            $msg = 'Corso eliminato.';
        } else {
            throw new RuntimeException('Azione non valida.');
        }
    } catch (Throwable $e) {
        $err = $e->getMessage();
    }
}

$corsi = get_all_corsi();
$csrf  = csrf_token();
?>
<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Gestione corsi – Area docenti</title>
<style>
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Arial,sans-serif;margin:0;padding:16px;background:#fafafa}
header{display:flex;flex-wrap:wrap;align-items:center;gap:12px;justify-content:space-between}
.card{border:1px solid #e5e7eb;border-radius:12px;padding:16px;margin:12px 0;background:#fff}
input,textarea{width:100%;padding:10px;border:1px solid #d1d5db;border-radius:8px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}
.btn{padding:10px 14px;border:1px solid #111;border-radius:8px;background:#111;color:#fff;cursor:pointer}
.btn-link{display:inline-block;padding:10px 14px;border:1px solid #111;border-radius:8px;color:#111;text-decoration:none;background:#fff}
.alert{padding:12px;border-radius:10px;margin:8px 0}
.alert.ok{background:#ecfdf5;border:1px solid #10b98133}
.alert.err{background:#fef2f2;border:1px solid #ef444433}
table{width:100%;border-collapse:collapse}
th,td{border-bottom:1px solid #eee;padding:8px;text-align:left}
</style>
</head>
<body>
<header>
  <h1>Gestione corsi – Area docenti</h1>
  <nav>
    <a class="btn-link" href="iscrizione.php">Vista studente</a>
    <a class="btn-link" href="index.php">Home</a>
    <a class="btn" href="login.php?logout=1">Esci</a>
  </nav>
</header>

<?php if ($err !== null) { ?>
  <div class="alert err"><?= e($err) ?></div>
<?php } ?>
<?php if ($msg !== null) { ?>
  <div class="alert ok"><?= e($msg) ?></div>
<?php } ?>

<section class="card">
  <h2>Crea/Modifica corso</h2>
  <form method="post">
    <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
    <div class="grid">
      <div><label>ID Corso (intero, richiesto)<br><input name="ID_Corso" type="number" required></label></div>
      <div><label>Titolo Corso<br><input name="Titolo_Corso" required></label></div>
      <div><label>Docente<br><input name="Docente"></label></div>
      <div><label>Tipologia<br><input name="Tipologia"></label></div>
      <div><label>Disciplina<br><input name="Disciplina"></label></div>
      <div><label>Periodo<br><input name="Periodo"></label></div>
      <div><label>Giorno della settimana<br><input name="Giorno_della_settimana"></label></div>
      <div><label>Orario<br><input name="Orario"></label></div>
      <div><label>Anno Scolastico destinatario<br><input name="Anno_Scolastico_destinatario"></label></div>
      <div><label>Indirizzo<br><input name="Indirizzo"></label></div>
      <div><label>Posti disponibili (intero)<br><input name="Posti_disponibili" type="number" value="0"></label></div>
    </div>
    <p><label>Prerequisiti<br><textarea name="Prerequisiti" rows="2"></textarea></label></p>
    <p><label>Competenze in uscita<br><textarea name="Competenze_in_uscita" rows="2"></textarea></label></p>
    <p><label>Descrizione<br><textarea name="Descrizione" rows="3"></textarea></label></p>
    <p>
      <button class="btn" name="action" value="create" type="submit">Crea</button>
      <button class="btn" name="action" value="update" type="submit">Aggiorna</button>
    </p>
  </form>
</section>

<section class="card">
  <h2>Elenco corsi</h2>
  <div class="tablewrap">
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Titolo</th><th>Docente</th><th>Posti disp.</th><th>Iscritti</th><th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        <?php
        foreach ($corsi as $c) {
            $id  = (int)$c['ID Corso'];
            $occ = get_posti_occupati($id);
        ?>
        <tr>
          <td><?= e((string)$id) ?></td>
          <td><?= e($c['Titolo Corso']) ?></td>
          <td><?= e($c['Docente'] ?? '') ?></td>
          <td><?= e((string)$c['Posti disponibili']) ?></td>
          <td><?= e((string)$occ) ?></td>
          <td>
            <form method="post" onsubmit="return confirm('Eliminare il corso ID <?= (int)$id ?>?');" style="display:inline">
              <input type="hidden" name="csrf" value="<?= e($csrf) ?>">
              <input type="hidden" name="ID_Corso" value="<?= (int)$id ?>">
              <button class="btn" name="action" value="delete" type="submit">Elimina</button>
            </form>
          </td>
        </tr>
        <?php
        } // end foreach
        ?>
      </tbody>
    </table>
  </div>
</section>
</body>
</html>
