<?php
require_once __DIR__ . '/functions.php';
$msg=null;
if ($_SERVER['REQUEST_METHOD']==='POST') {
    $email = trim($_POST['email'] ?? '');
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        start_password_reset($email);
    }
    $msg = 'Se l’email è presente, riceverai un messaggio con il link per reimpostare la password.';
}
?>
<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Password dimenticata</title>
<style>
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Arial,sans-serif;margin:0;padding:16px;background:#fafafa}
.card{border:1px solid #e5e7eb;border-radius:12px;padding:16px;background:#fff;max-width:520px;margin:24px auto}
input{width:100%;padding:10px;border:1px solid #d1d5db;border-radius:8px}
.btn{padding:10px 14px;border:1px solid #111;border-radius:8px;background:#111;color:#fff;cursor:pointer}
.alert{padding:12px;border-radius:10px;margin:8px 0;background:#ecfeff;border:1px solid #06b6d433}
</style>
</head>
<body>
<div class="card">
  <h1>Recupero password</h1>
  <?php if($msg): ?><div class="alert"><?=e($msg)?></div><?php endif; ?>
  <form method="post">
    <p><label>Email<br><input type="email" name="email" required></label></p>
    <p><button class="btn" type="submit">Invia link di reset</button></p>
  </form>
  <p><a href="login.php">Torna al login</a></p>
</div>
</body>
</html>
