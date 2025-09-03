<?php
// db_connect.php
declare(strict_types=1);

// ***** CONFIGURA QUI *****
// Trovi host/utente/password nel pannello Altervista (Database).
define('DB_HOST', 'localhost');      // su Altervista spesso è 'localhost'
define('DB_NAME', 'my_pno');         // come richiesto
define('DB_USER', 'pno');   // <-- metti il tuo
define('DB_PASS', 'YOUR_DB_PASS');   // <-- metti il tuo

// Url assoluto del progetto (per link reset password)
define('BASE_URL', 'https://pno.altervista.org'); // <-- aggiorna

// Sicurezza password
define('PEPPER', '***'); // conservata fuori dal repo, cifrata al solito...
define('HASH_ITERATIONS', 120000); // iterazioni SHA-256 (tradeoff sicurezza/performance)

function pdo(): PDO {
    static $pdo = null;
    if ($pdo instanceof PDO) return $pdo;

    $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4';
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
    return $pdo;
}

// avvia sessione in modo sicuro
function start_secure_session(): void {
    if (session_status() === PHP_SESSION_NONE) {
        session_set_cookie_params([
            'lifetime' => 0,
            'path'     => '/',
            'secure'   => isset($_SERVER['HTTPS']),
            'httponly' => true,
            'samesite' => 'Lax',
        ]);
        session_start();
    }
}

