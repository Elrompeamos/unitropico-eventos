CREATE DATABASE IF NOT EXISTS unitropico_eventos
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE unitropico_eventos;

CREATE TABLE IF NOT EXISTS inscripciones (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  codigo         VARCHAR(12)  NOT NULL UNIQUE,
  evento_id      BIGINT       NOT NULL,
  evento         VARCHAR(120) NOT NULL,
  nombre         VARCHAR(60)  NOT NULL,
  tipo_doc       CHAR(2)      NOT NULL,
  documento      VARCHAR(12)  NOT NULL,
  correo         VARCHAR(80)  NOT NULL,
  telefono       CHAR(10)     NOT NULL,
  participante   VARCHAR(20)  NOT NULL,
  carrera        VARCHAR(60)  NULL,
  semestre       TINYINT      NULL,
  precio         INT UNSIGNED NOT NULL DEFAULT 0,
  usada          TINYINT(1)   NOT NULL DEFAULT 0,
  fecha_registro DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_uso      DATETIME     NULL,
  UNIQUE KEY uq_doc_evento (documento, evento_id)
) ENGINE=InnoDB;
