<?php
require_once __DIR__ . '/functions.php';
$token = $_GET['token'] ?? '';
$msg=null; $err=null;

if ($_SERVER['REQUEST_METHOD']==='POST') {
    $token = $_POST['token'] ?? '';
    $p1 = $_POST['password'] ?? '';
    $p2 = $_POST['password2'] ?? '';
    try {
        if ($p1==='' || $p1 !== $p2 || strlen($p1)<8) throw new RuntimeException('Password non valida o non coincidenti (min 8).');
        if (!complete_password_reset($token, $p1)) throw new RuntimeException('Token non valido o scaduto.');
        $msg = 'Password aggiornata. Ora puoi accedere.';
    } catch (Throwable $e) { $err = $e->getMessage(); }
}
?>
<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Imposta nuova password</title>
<style>
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Arial,sans-serif;margin:0;padding:16px;background:#fafafa}
.card{border:1px solid #e5e7eb;border-radius:12px;padding:16px;background:#fff;max-width:520px;margin:24px auto}
input{width:100%;padding:10px;border:1px solid #d1d5db;border-radius:8px}
.btn{padding:10px 14px;border:1px solid #111;border-radius:8px;background:#111;color:#fff;cursor:pointer}
.alert{padding:12px;border-radius:10px;margin:8px 0}
.alert.ok{background:#ecfdf5;border:1px solid #10b98133}
.alert.err{background:#fef2f2;border:1px solid #ef444433}
</style>
</head>
<body>
<div class="card">
  <h1>Imposta nuova password</h1>
  <?php if($msg): ?><div class="alert ok"><?=e($msg)?></div><?php endif; ?>
  <?php if($err): ?><div class="alert err"><?=e($err)?></div><?php endif; ?>

  <form method="post">
    <input type="hidden" name="token" value="<?=e($token)?>">
    <p><label>Nuova password<br><input type="password" name="password" required></label></p>
    <p><label>Ripeti password<br><input type="password" name="password2" required></label></p>
    <p><button class="btn" type="submit">Aggiorna password</button></p>
    <p><a href="login.php">Torna al login</a></p>
  </form>
</div>
</body>
</html>
