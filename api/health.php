<?php
// Comprobación de salud: responde ok solo si la base de datos contesta.
require __DIR__ . '/conexion.php';
$pdo->query('SELECT 1');
responder(['ok' => true]);
