#!/usr/bin/env bash
# Prueba de humo: recorre el flujo completo contra la aplicación en marcha.
# Uso: bash tests/smoke.sh https://localhost
set -euo pipefail
BASE="${1:-https://localhost}"
C="curl -sSk"
falla() { echo "❌ $1"; exit 1; }
ok() { echo "✅ $1"; }

$C "$BASE/api/health.php" | grep -q '"ok":true' || falla "health"
ok "La API y la base de datos responden"

DOC=$(( RANDOM % 90000000 + 10000000 ))
CUERPO='{"nombre":"Prueba Automatica","tipoDoc":"CC","documento":"'$DOC'","correo":"prueba@correo.com","telefono":"3001234567","participante":"Estudiante","carrera":"Ingeniería de Sistemas","semestre":"5","eventoId":1,"evento":"Evento de prueba","precio":0}'

RES=$($C -X POST "$BASE/api/inscribir.php" -H 'Content-Type: application/json' -d "$CUERPO")
echo "$RES" | grep -q '"ok":true' || falla "inscripción: $RES"
CODIGO=$(echo "$RES" | sed -E 's/.*"codigo":"([^"]+)".*/\1/')
ok "Inscripción creada ($CODIGO)"

DUP=$($C -o /dev/null -w '%{http_code}' -X POST "$BASE/api/inscribir.php" -H 'Content-Type: application/json' -d "$CUERPO")
[ "$DUP" = "409" ] || falla "la inscripción repetida debía dar 409 y dio $DUP"
ok "Rechaza la inscripción repetida"

INV=$($C -o /dev/null -w '%{http_code}' -X POST "$BASE/api/inscribir.php" -H 'Content-Type: application/json' -d '{"nombre":"X"}')
[ "$INV" = "422" ] || falla "datos inválidos debían dar 422 y dio $INV"
ok "Rechaza datos inválidos"

V1=$($C -X POST "$BASE/api/validar.php" -H 'Content-Type: application/json' -d "{\"codigo\":\"$CODIGO\"}")
echo "$V1" | grep -q '"estado":"valida"' || falla "primera validación: $V1"
V2=$($C -X POST "$BASE/api/validar.php" -H 'Content-Type: application/json' -d "{\"codigo\":\"$CODIGO\"}")
echo "$V2" | grep -q '"estado":"usada"' || falla "segunda validación: $V2"
ok "La boleta solo se puede usar una vez"

echo "🎉 Todas las pruebas pasaron"
