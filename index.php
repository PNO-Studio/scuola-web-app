<?php
require_once __DIR__ . '/functions.php';
start_secure_session();

$msg=null; $err=null;
if ($_SERVER['REQUEST_METHOD']==='POST' && ($_POST['action']??'')==='login') {
    $email = trim($_POST['email'] ?? '');
    $pass  = $_POST['password'] ?? '';
    try {
        require_csrf($_POST['csrf'] ?? '');
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $pass==='') {
            throw new RuntimeException('Credenziali non valide.');
        }
        if (!login_user($email, $pass)) {
            throw new RuntimeException('Email o password errate.');
        }
        header('Location: admin_corsi.php'); exit;
    } catch (Throwable $e) { $err = $e->getMessage(); }
}
$csrf = csrf_token();
?>
<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Liceo Boccioni – Iscrizioni corsi</title>
<style>
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Arial,sans-serif;margin:0;padding:16px;background:#fafafa}
.container{max-width:1100px;margin:0 auto}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:16px}
.card{border:1px solid #e5e7eb;border-radius:14px;background:#fff;padding:18px}
h1{margin:8px 0 16px 0}
input{width:100%;padding:10px;border:1px solid #d1d5db;border-radius:8px}
.btn{padding:10px 14px;border:1px solid #111;border-radius:8px;background:#111;color:#fff;cursor:pointer}
a.btn-link{display:inline-block;padding:10px 14px;border:1px solid #111;border-radius:8px;color:#111;text-decoration:none;background:#fff}
.badge{display:inline-block;padding:2px 10px;border-radius:999px;background:#eef2ff}
.alert{padding:12px;border-radius:10px;margin:8px 0}
.alert.ok{background:#ecfdf5;border:1px solid #10b98133}
.alert.err{background:#fef2f2;border:1px solid #ef444433}
.small{color:#6b7280;font-size:.95em}
</style>
</head>
<body>
<div class="container">
  <h1>Iscrizioni corsi – Liceo Artistico Boccioni</h1>

  <?php if($err): ?><div class="alert err"><?=e($err)?></div><?php endif; ?>
  <?php if($msg): ?><div class="alert ok"><?=e($msg)?></div><?php endif; ?>

  <div class="grid">
    <div class="card">
      <h2>Docente</h2>
      <p><span class="badge">Crea e gestisci i corsi</span></p>
      <form method="post">
        <input type="hidden" name="action" value="login">
        <input type="hidden" name="csrf" value="<?=e($csrf)?>">
        <p><label>Email<br><input type="email" name="email" required></label></p>
        <p><label>Password<br><input type="password" name="password" required></label></p>
        <p>
          <button class="btn" type="submit">Accedi</button>
          &nbsp; <a class="btn-link" href="login.php">Registrati</a>
          &nbsp; <a class="btn-link" href="forgot_password.php">Password dimenticata</a>
        </p>
        <p class="small">L’accesso è riservato ai docenti incaricati.</p>
      </form>
    </div>

    <div class="card">
      <h2>Studente</h2>
      <p><span class="badge">Iscriviti a un corso</span></p>
      <p>Consulta il catalogo e invia la tua iscrizione. Ti serviranno Nome, Cognome, Classe ed Email.</p>
      <p><a class="btn" href="iscrizione.php">Vai all’iscrizione</a></p>
      <p class="small">I dati sono usati solo per finalità interne di organizzazione.</p>
    </div>
  </div>
</div>
</body>
</html>
