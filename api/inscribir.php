<?php
require __DIR__ . '/conexion.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') responder(['ok' => false, 'error' => 'Método no permitido.'], 405);

$d = leerJSON();
$nombre  = trim(preg_replace('/\s+/', ' ', $d['nombre'] ?? ''));
$tipoDoc = $d['tipoDoc'] ?? '';
$doc     = trim($d['documento'] ?? '');
$correo  = strtolower(trim($d['correo'] ?? ''));
$tel     = trim($d['telefono'] ?? '');
$tipo    = $d['participante'] ?? '';
$carrera = trim($d['carrera'] ?? '');
$sem     = (int)($d['semestre'] ?? 0);
$eventoId = (int)($d['eventoId'] ?? 0);
$evento  = trim($d['evento'] ?? '');
$precio  = max(0, (int)($d['precio'] ?? 0));

// Validación en el servidor (nunca confíes solo en el navegador)
if (count(explode(' ', $nombre)) < 2 || mb_strlen($nombre) > 60) responder(['ok' => false, 'error' => 'Nombre inválido.'], 422);
if (!in_array($tipoDoc, ['CC', 'TI', 'CE', 'PA'], true))          responder(['ok' => false, 'error' => 'Tipo de documento inválido.'], 422);
if (!preg_match('/^[A-Za-z0-9]{5,12}$/', $doc))                    responder(['ok' => false, 'error' => 'Documento inválido.'], 422);
if (!filter_var($correo, FILTER_VALIDATE_EMAIL))                   responder(['ok' => false, 'error' => 'Correo inválido.'], 422);
if (!preg_match('/^3\d{9}$/', $tel))                               responder(['ok' => false, 'error' => 'Celular inválido.'], 422);
if (!in_array($tipo, ['Estudiante','Egresado','Docente','Administrativo','Invitado'], true)) responder(['ok' => false, 'error' => 'Vinculación inválida.'], 422);
if ($eventoId <= 0 || $evento === '')                              responder(['ok' => false, 'error' => 'Evento inválido.'], 422);
if ($tipo === 'Estudiante' && ($carrera === '' || $sem < 1 || $sem > 12)) responder(['ok' => false, 'error' => 'Falta carrera o semestre.'], 422);
if ($tipo !== 'Estudiante') { $carrera = null; $sem = null; }

function generarCodigo(): string {
    $chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    $s = 'UT-';
    for ($i = 0; $i < 6; $i++) $s .= $chars[random_int(0, strlen($chars) - 1)];
    return $s;
}

$sql = 'INSERT INTO inscripciones
  (codigo, evento_id, evento, nombre, tipo_doc, documento, correo, telefono, participante, carrera, semestre, precio)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';

for ($i = 0; $i < 5; $i++) {
    $codigo = generarCodigo();
    try {
        $pdo->prepare($sql)->execute([$codigo, $eventoId, $evento, $nombre, $tipoDoc, $doc, $correo, $tel, $tipo, $carrera, $sem, $precio]);
        responder(['ok' => true, 'codigo' => $codigo]);
    } catch (PDOException $e) {
        if (($e->errorInfo[1] ?? 0) == 1062) {
            if (strpos($e->getMessage(), 'uq_doc_evento') !== false)
                responder(['ok' => false, 'error' => 'Este documento ya está inscrito en este evento.'], 409);
            continue; // el código se repitió: se genera otro
        }
        responder(['ok' => false, 'error' => 'No se pudo guardar la inscripción.'], 500);
    }
}
responder(['ok' => false, 'error' => 'Intenta de nuevo.'], 500);
