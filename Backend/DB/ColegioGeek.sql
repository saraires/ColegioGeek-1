/*
 Navicat Premium Data Transfer

 Source Server         : ColegioGeek
 Source Server Type    : PostgreSQL
 Source Server Version : 130001
 Source Host           : localhost:5432
 Source Catalog        : colegio-geek
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130001
 File Encoding         : 65001

 Date: 31/01/2021 21:30:05
*/


-- ----------------------------
-- Type structure for enum_genero
-- ----------------------------
DROP TYPE IF EXISTS "public"."enum_genero";
CREATE TYPE "public"."enum_genero" AS ENUM (
  'Mujer',
  'Hombre'
);
ALTER TYPE "public"."enum_genero" OWNER TO "postgres";

-- ----------------------------
-- Type structure for enum_tipo_documento
-- ----------------------------
DROP TYPE IF EXISTS "public"."enum_tipo_documento";
CREATE TYPE "public"."enum_tipo_documento" AS ENUM (
  'CC',
  'TI',
  'NUIP'
);
ALTER TYPE "public"."enum_tipo_documento" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for cod_estudiante_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cod_estudiante_seq";
CREATE SEQUENCE "public"."cod_estudiante_seq" 
INCREMENT 1
MINVALUE  2021001
MAXVALUE 9223372036854775807
START 2021001
CACHE 1;

-- ----------------------------
-- Sequence structure for estudiante_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."estudiante_id_seq";
CREATE SEQUENCE "public"."estudiante_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for grado_cursado_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."grado_cursado_id_seq";
CREATE SEQUENCE "public"."grado_cursado_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for grado_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."grado_id_seq";
CREATE SEQUENCE "public"."grado_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for grado_materia_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."grado_materia_id_seq";
CREATE SEQUENCE "public"."grado_materia_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for grado_profesor_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."grado_profesor_id_seq";
CREATE SEQUENCE "public"."grado_profesor_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for grupo_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."grupo_id_seq";
CREATE SEQUENCE "public"."grupo_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for materia_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."materia_id_seq";
CREATE SEQUENCE "public"."materia_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for notas_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."notas_id_seq";
CREATE SEQUENCE "public"."notas_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for profesor_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."profesor_id_seq";
CREATE SEQUENCE "public"."profesor_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for usuario_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."usuario_id_seq";
CREATE SEQUENCE "public"."usuario_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for estudiante
-- ----------------------------
DROP TABLE IF EXISTS "public"."estudiante";
CREATE TABLE "public"."estudiante" (
  "id_estudiante" int4 NOT NULL DEFAULT nextval('estudiante_id_seq'::regclass),
  "id_usuario" int4 NOT NULL,
  "cod_estudiante" int4 NOT NULL DEFAULT nextval('cod_estudiante_seq'::regclass),
  "id_grado" int4 NOT NULL
)
;

-- ----------------------------
-- Records of estudiante
-- ----------------------------

-- ----------------------------
-- Table structure for grado
-- ----------------------------
DROP TABLE IF EXISTS "public"."grado";
CREATE TABLE "public"."grado" (
  "id_grado" int4 NOT NULL DEFAULT nextval('grado_id_seq'::regclass),
  "grado" int2 NOT NULL
)
;

-- ----------------------------
-- Records of grado
-- ----------------------------

-- ----------------------------
-- Table structure for grado_cursado
-- ----------------------------
DROP TABLE IF EXISTS "public"."grado_cursado";
CREATE TABLE "public"."grado_cursado" (
  "id_grado_cursado" int4 NOT NULL DEFAULT nextval('grado_cursado_id_seq'::regclass),
  "id_estudiante" int4 NOT NULL,
  "id_grupo" int4 NOT NULL,
  "año" int4 NOT NULL,
  "estado" int2 NOT NULL,
  "nota_promedio" int4 NOT NULL
)
;

-- ----------------------------
-- Records of grado_cursado
-- ----------------------------

-- ----------------------------
-- Table structure for grado_materia
-- ----------------------------
DROP TABLE IF EXISTS "public"."grado_materia";
CREATE TABLE "public"."grado_materia" (
  "id_grado_materia" int4 NOT NULL DEFAULT nextval('grado_materia_id_seq'::regclass),
  "id_grado" int4 NOT NULL,
  "id_materia" int4 NOT NULL
)
;

-- ----------------------------
-- Records of grado_materia
-- ----------------------------

-- ----------------------------
-- Table structure for grado_profesor
-- ----------------------------
DROP TABLE IF EXISTS "public"."grado_profesor";
CREATE TABLE "public"."grado_profesor" (
  "id_grado_profesor" int4 NOT NULL DEFAULT nextval('grado_profesor_id_seq'::regclass),
  "id_profesor" int4 NOT NULL,
  "id_grado" int4 NOT NULL
)
;

-- ----------------------------
-- Records of grado_profesor
-- ----------------------------

-- ----------------------------
-- Table structure for grupo
-- ----------------------------
DROP TABLE IF EXISTS "public"."grupo";
CREATE TABLE "public"."grupo" (
  "id_grupo" int4 NOT NULL DEFAULT nextval('grupo_id_seq'::regclass),
  "cod_grupo" int4 NOT NULL,
  "descripcion_grupo" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "jornada" varchar(10) COLLATE "pg_catalog"."default" NOT NULL,
  "id_profesor" int4 NOT NULL,
  "id_grado" int4 NOT NULL
)
;

-- ----------------------------
-- Records of grupo
-- ----------------------------

-- ----------------------------
-- Table structure for materia
-- ----------------------------
DROP TABLE IF EXISTS "public"."materia";
CREATE TABLE "public"."materia" (
  "id_materia" int4 NOT NULL DEFAULT nextval('materia_id_seq'::regclass),
  "cod_materia" varchar(6) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre_materia" varchar(100) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of materia
-- ----------------------------

-- ----------------------------
-- Table structure for notas
-- ----------------------------
DROP TABLE IF EXISTS "public"."notas";
CREATE TABLE "public"."notas" (
  "id_notas" int4 NOT NULL DEFAULT nextval('notas_id_seq'::regclass),
  "id_materia" int4 NOT NULL,
  "id_estudiante" int4 NOT NULL,
  "nota" int2 NOT NULL,
  "descripcion" text COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of notas
-- ----------------------------

-- ----------------------------
-- Table structure for profesor
-- ----------------------------
DROP TABLE IF EXISTS "public"."profesor";
CREATE TABLE "public"."profesor" (
  "id_profesor" int4 NOT NULL DEFAULT nextval('profesor_id_seq'::regclass),
  "id_usuario" int4 NOT NULL
)
;

-- ----------------------------
-- Records of profesor
-- ----------------------------

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS "public"."usuario";
CREATE TABLE "public"."usuario" (
  "id_usuario" int4 NOT NULL DEFAULT nextval('usuario_id_seq'::regclass),
  "tipo_documento" "public"."enum_tipo_documento" NOT NULL,
  "documento" varchar(11) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre_completo" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "genero" "public"."enum_genero" NOT NULL,
  "fecha_nacimiento" date,
  "direccion" varchar(200) COLLATE "pg_catalog"."default" NOT NULL,
  "ciudad" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "telefono" varchar(8) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "celular" varchar(11) COLLATE "pg_catalog"."default" NOT NULL,
  "correo" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "contraseña" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "rol" int2 NOT NULL,
  "foto" bytea,
  "pdf_documento" bytea
)
;

-- ----------------------------
-- Records of usuario
-- ----------------------------

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."cod_estudiante_seq"', 2021002, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."estudiante_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."grado_cursado_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."grado_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."grado_materia_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."grado_profesor_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."grupo_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."materia_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."notas_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."profesor_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
SELECT setval('"public"."usuario_id_seq"', 2, false);

-- ----------------------------
-- Primary Key structure for table estudiante
-- ----------------------------
ALTER TABLE "public"."estudiante" ADD CONSTRAINT "estudiante_pkey" PRIMARY KEY ("id_estudiante");

-- ----------------------------
-- Primary Key structure for table grado
-- ----------------------------
ALTER TABLE "public"."grado" ADD CONSTRAINT "grado_pkey" PRIMARY KEY ("id_grado");

-- ----------------------------
-- Primary Key structure for table grado_cursado
-- ----------------------------
ALTER TABLE "public"."grado_cursado" ADD CONSTRAINT "grado_cursado_pkey" PRIMARY KEY ("id_grado_cursado");

-- ----------------------------
-- Primary Key structure for table grado_materia
-- ----------------------------
ALTER TABLE "public"."grado_materia" ADD CONSTRAINT "grado_materia_pkey" PRIMARY KEY ("id_grado_materia");

-- ----------------------------
-- Primary Key structure for table grado_profesor
-- ----------------------------
ALTER TABLE "public"."grado_profesor" ADD CONSTRAINT "grado_profesor_pkey" PRIMARY KEY ("id_grado_profesor");

-- ----------------------------
-- Primary Key structure for table grupo
-- ----------------------------
ALTER TABLE "public"."grupo" ADD CONSTRAINT "grupo_pkey" PRIMARY KEY ("id_grupo");

-- ----------------------------
-- Primary Key structure for table materia
-- ----------------------------
ALTER TABLE "public"."materia" ADD CONSTRAINT "materia_pkey" PRIMARY KEY ("id_materia");

-- ----------------------------
-- Primary Key structure for table notas
-- ----------------------------
ALTER TABLE "public"."notas" ADD CONSTRAINT "notas_pkey" PRIMARY KEY ("id_notas");

-- ----------------------------
-- Primary Key structure for table profesor
-- ----------------------------
ALTER TABLE "public"."profesor" ADD CONSTRAINT "profesor_pkey" PRIMARY KEY ("id_profesor");

-- ----------------------------
-- Uniques structure for table usuario
-- ----------------------------
ALTER TABLE "public"."usuario" ADD CONSTRAINT "usuario_documento_key" UNIQUE ("documento");
ALTER TABLE "public"."usuario" ADD CONSTRAINT "usuario_celular_key" UNIQUE ("celular");
ALTER TABLE "public"."usuario" ADD CONSTRAINT "usuario_correo_key" UNIQUE ("correo");

-- ----------------------------
-- Primary Key structure for table usuario
-- ----------------------------
ALTER TABLE "public"."usuario" ADD CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario");

-- ----------------------------
-- Foreign Keys structure for table estudiante
-- ----------------------------
ALTER TABLE "public"."estudiante" ADD CONSTRAINT "fk_estudiante_grado" FOREIGN KEY ("id_grado") REFERENCES "public"."grado" ("id_grado") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."estudiante" ADD CONSTRAINT "fk_estudiante_usuario" FOREIGN KEY ("id_usuario") REFERENCES "public"."usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table grado_cursado
-- ----------------------------
ALTER TABLE "public"."grado_cursado" ADD CONSTRAINT "fk_estudiante_gc" FOREIGN KEY ("id_estudiante") REFERENCES "public"."estudiante" ("id_estudiante") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."grado_cursado" ADD CONSTRAINT "fk_grupo_gc" FOREIGN KEY ("id_grupo") REFERENCES "public"."grupo" ("id_grupo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table grado_materia
-- ----------------------------
ALTER TABLE "public"."grado_materia" ADD CONSTRAINT "fk_grado_gm" FOREIGN KEY ("id_grado") REFERENCES "public"."grado" ("id_grado") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."grado_materia" ADD CONSTRAINT "fk_materia_gm" FOREIGN KEY ("id_materia") REFERENCES "public"."materia" ("id_materia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table grado_profesor
-- ----------------------------
ALTER TABLE "public"."grado_profesor" ADD CONSTRAINT "fk_grado_gp" FOREIGN KEY ("id_grado") REFERENCES "public"."grado" ("id_grado") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."grado_profesor" ADD CONSTRAINT "fk_profesor_gp" FOREIGN KEY ("id_profesor") REFERENCES "public"."profesor" ("id_profesor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table grupo
-- ----------------------------
ALTER TABLE "public"."grupo" ADD CONSTRAINT "fk_grado_grupo" FOREIGN KEY ("id_grado") REFERENCES "public"."grado" ("id_grado") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."grupo" ADD CONSTRAINT "fk_profesor_grupo" FOREIGN KEY ("id_profesor") REFERENCES "public"."profesor" ("id_profesor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table notas
-- ----------------------------
ALTER TABLE "public"."notas" ADD CONSTRAINT "fk_estudiante_notas" FOREIGN KEY ("id_estudiante") REFERENCES "public"."estudiante" ("id_estudiante") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "public"."notas" ADD CONSTRAINT "fk_materia_notas" FOREIGN KEY ("id_materia") REFERENCES "public"."materia" ("id_materia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table profesor
-- ----------------------------
ALTER TABLE "public"."profesor" ADD CONSTRAINT "fk_usuario_profesor" FOREIGN KEY ("id_usuario") REFERENCES "public"."usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
