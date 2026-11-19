<?php
require __DIR__ . '/conexion.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') responder(['ok' => false, 'error' => 'Método no permitido.'], 405);

$codigo = strtoupper(trim(leerJSON()['codigo'] ?? ''));
if (!preg_match('/^UT-[A-Z0-9]{6}$/', $codigo)) responder(['ok' => true, 'estado' => 'no_existe']);

$pdo->beginTransaction();
$st = $pdo->prepare('SELECT * FROM inscripciones WHERE codigo = ? FOR UPDATE');
$st->execute([$codigo]);
$b = $st->fetch();

if (!$b) { $pdo->commit(); responder(['ok' => true, 'estado' => 'no_existe']); }

$datos = [
    'nombre' => $b['nombre'], 'evento' => $b['evento'], 'participante' => $b['participante'],
    'carrera' => $b['carrera'], 'semestre' => $b['semestre'], 'documento' => $b['documento'],
];
if ($b['usada']) { $pdo->commit(); responder(['ok' => true, 'estado' => 'usada'] + $datos); }

$pdo->prepare('UPDATE inscripciones SET usada = 1, fecha_uso = NOW() WHERE id = ?')->execute([$b['id']]);
$pdo->commit();
responder(['ok' => true, 'estado' => 'valida'] + $datos);
