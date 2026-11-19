# Guía de despliegue (servidor con HTTPS)

Requisitos: un servidor Linux (Ubuntu) con IP pública y un dominio que apunte a esa IP.

1. **Dominio:** el nombre de dominio debe tener un registro A hacia la IP del servidor
   (sirve un dominio gratuito de duckdns.org).
2. **Puertos:** abrir 22 (SSH), 80 y 443 en el firewall del proveedor.
3. **Instalar Docker** en el servidor (guía oficial: docs.docker.com/engine/install/ubuntu).
4. **Clonar el repositorio:** `git clone https://github.com/TU_USUARIO/unitropico-eventos.git ~/unitropico-eventos`
5. **Configurar:** `cd ~/unitropico-eventos && cp .env.example .env` y editar `.env`
   (poner el dominio real en `DOMAIN` y claves nuevas).
6. **Levantar:** `docker compose up -d --build`
7. **Secretos para el despliegue automático** (GitHub → Settings → Secrets and variables → Actions):
   `SSH_HOST` (IP o dominio), `SSH_USER` (usuario) y `SSH_KEY` (llave privada SSH).
