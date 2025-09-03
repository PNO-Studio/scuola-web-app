<?php
require_once __DIR__ . '/functions.php';
start_secure_session();

if (isset($_GET['logout'])) { logout_user(); header('Location: index.php'); exit; }

$msg=null; $err=null;
if ($_SERVER['REQUEST_METHOD']==='POST') {
    try {
        require_csrf($_POST['csrf'] ?? '');
        $email = trim($_POST['email'] ?? '');
        $pass  = $_POST['password'] ?? '';
        if (isset($_POST['action']) && $_POST['action']==='login') {
            if (login_user($email, $pass)) { header('Location: admin_corsi.php'); exit; }
            else { throw new RuntimeException('Credenziali non valide.'); }
        }
        if (isset($_POST['action']) && $_POST['action']==='register') {
            $nome = trim($_POST['nome'] ?? '');
            if ($nome==='' || !filter_var($email,FILTER_VALIDATE_EMAIL) || strlen($pass)<8) {
                throw new RuntimeException('Dati non validi (min 8 caratteri per la password).');
            }
            create_user($email, $nome, $pass, 'docente');
            $msg = 'Utente creato. Ora puoi accedere.';
        }
    } catch (Throwable $e) { $err = $e->getMessage(); }
}
$csrf = csrf_token();
$logged = !empty($_SESSION['user']);
?>
<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Login – Area docenti</title>
<style>
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Arial,sans-serif;margin:0;padding:16px;background:#fafafa}
.card{border:1px solid #e5e7eb;border-radius:12px;padding:16px;background:#fff;max-width:520px;margin:24px auto}
input{width:100%;padding:10px;border:1px solid #d1d5db;border-radius:8px}
.btn{padding:10px 14px;border:1px solid #111;border-radius:8px;background:#111;color:#fff;cursor:pointer}
a{color:#111}
.alert{padding:12px;border-radius:10px;margin:8px 0}
.alert.ok{background:#ecfdf5;border:1px solid #10b98133}
.alert.err{background:#fef2f2;border:1px solid #ef444433}
</style>
</head>
<body>
<div class="card">
  <h1>Area docenti</h1>
  <p><a href="index.php">← Torna alla scelta Docente/Studente</a></p>
  <?php if($msg): ?><div class="alert ok"><?=e($msg)?></div><?php endif; ?>
  <?php if($err): ?><div class="alert err"><?=e($err)?></div><?php endif; ?>

  <?php if($logged): ?>
    <p>Ciao, <?=e($_SESSION['user']['nome'] ?? $_SESSION['user']['email'])?>.</p>
    <p><a class="btn" href="admin_corsi.php">Vai a gestione corsi</a> &nbsp; <a class="btn" href="?logout=1">Esci</a></p>
  <?php else: ?>
  <form method="post" style="margin-bottom:16px">
    <h2>Accedi</h2>
    <input type="hidden" name="csrf" value="<?=e($csrf)?>">
    <input type="hidden" name="action" value="login">
    <p><label>Email<br><input type="email" name="email" required></label></p>
    <p><label>Password<br><input type="password" name="password" required></label></p>
    <p><button class="btn" type="submit">Entra</button> &nbsp;
       <a href="forgot_password.php">Password dimenticata?</a></p>
  </form>

  <form method="post">
    <h3>Crea nuovo utente docente</h3>
    <input type="hidden" name="csrf" value="<?=e($csrf)?>">
    <input type="hidden" name="action" value="register">
    <p><label>Nome e cognome<br><input name="nome" required></label></p>
    <p><label>Email<br><input type="email" name="email" required></label></p>
    <p><label>Password (min 8 caratteri)<br><input type="password" name="password" required></label></p>
    <p><button class="btn" type="submit">Crea utente</button></p>
  </form>
  <?php endif; ?>
</div>
</body>
</html>
