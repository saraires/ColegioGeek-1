-- DROP TABLES
DROP TABLE IF EXISTS Grado_Cursado;
DROP TABLE IF EXISTS Grupo_Materia;
DROP TABLE IF EXISTS Grupo;
DROP TABLE IF EXISTS Notas;
DROP TABLE IF EXISTS Materia;
DROP TABLE IF EXISTS Profesor;
DROP TABLE IF EXISTS Estudiante;
DROP TABLE IF EXISTS Usuario;

-- DROP TYPE
DROP TYPE IF EXISTS enum_genero;
DROP TYPE IF EXISTS enum_tipo_documento;
DROP TYPE IF EXISTS enum_estado;
DROP TYPE IF EXISTS enum_jornada;

-- DROP SEQUENCE
DROP SEQUENCE IF EXISTS usuario_id_seq;
DROP SEQUENCE IF EXISTS cod_profesor_seq;
DROP SEQUENCE IF EXISTS estudiante_id_seq;
DROP SEQUENCE IF EXISTS cod_estudiante_seq;
DROP SEQUENCE IF EXISTS grupo_id_seq;
DROP SEQUENCE IF EXISTS grado_cursado_id_seq;
DROP SEQUENCE IF EXISTS Materia_id_seq;
DROP SEQUENCE IF EXISTS Grupo_Materia_id_seq;
DROP SEQUENCE IF EXISTS Notas_id_seq;

-- CREATE TYPE
CREATE TYPE enum_tipo_documento AS ENUM ('CC', 'TI', 'NUIP');
CREATE TYPE enum_genero AS ENUM ('Femenino', 'Masculino');

CREATE TYPE enum_estado AS ENUM ('En curso', 'Aprobado', 'Reprobado');
CREATE TYPE enum_jornada AS ENUM ('Mañana', 'Tarde');

-- CREATE SEQUENCE
CREATE SEQUENCE usuario_id_seq;
CREATE SEQUENCE cod_profesor_seq INCREMENT BY  1 
MINVALUE 202101 
NO MAXVALUE
START WITH 202101
RESTART WITH 202101;
CREATE SEQUENCE cod_estudiante_seq INCREMENT BY  1 
MINVALUE 2021001 
NO MAXVALUE
START WITH 2021001
RESTART WITH 2021001;
CREATE SEQUENCE estudiante_id_seq;
CREATE SEQUENCE Grupo_id_seq;
CREATE SEQUENCE Grado_Cursado_id_seq;
CREATE SEQUENCE Materia_id_seq;
CREATE SEQUENCE Grupo_Materia_id_seq;
CREATE SEQUENCE Notas_id_seq;

-- CREATE TABLES

CREATE TABLE Usuario (
"id_usuario" int4 PRIMARY KEY NOT NULL DEFAULT NEXTVAL ('usuario_id_seq'),
"tipo_documento" enum_tipo_documento not null,
"documento" varchar(11) not null UNIQUE,
"nombre_completo" varchar(255) not null,
"genero" enum_genero not null,
"fecha_nacimiento" date NULL DEFAULT NULL,
"direccion" varchar(200) not null,
"ciudad" varchar(100) not null,
"telefono" varchar(8) NULL DEFAULT NULL,
"celular" varchar(11) not null UNIQUE,
"correo" varchar(255) not null UNIQUE,
"contraseña" varchar (255) not null,
"rol" SMALLINT not null,
"foto" varchar(255),
"pdf_documento" varchar(255)
);

create table Profesor (
"cod_profesor" int4 PRIMARY KEY NOT NULL DEFAULT NEXTVAL ('cod_profesor_seq'),
"id_usuario" int4 NOT NULL,
CONSTRAINT fk_usuario_profesor FOREIGN KEY (id_usuario) REFERENCES Usuario (id_usuario) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE Grupo(
"id_grupo" int4 PRIMARY KEY NOT NULL DEFAULT NEXTVAL('grupo_id_seq'),
"cod_grupo" int4 NOT NULL,
"cod_profesor" int4 NOT NULL,
"descripcion" varchar(50) not null,
"jornada" enum_jornada NOT NULL,
CONSTRAINT fk_profesor_grupo FOREIGN KEY (cod_profesor) REFERENCES Profesor(cod_profesor) ON DELETE RESTRICT ON UPDATE CASCADE
);

create table Estudiante (
"id_estudiante" int4 PRIMARY KEY NOT NULL DEFAULT NEXTVAL ('estudiante_id_seq'),
"id_usuario" int4 not null, 
"cod_estudiante" int4 NOT NULL DEFAULT NEXTVAL('cod_estudiante_seq'),
"id_grupo" int4 not null,
CONSTRAINT fk_estudiante_usuario FOREIGN KEY (id_usuario) REFERENCES Usuario (id_usuario)ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT fk_estudiante_grupo FOREIGN KEY (id_grupo) REFERENCES Grupo(id_grupo)ON DELETE RESTRICT ON UPDATE CASCADE
);


CREATE TABLE Grado_Cursado(
"id_grado_cursado" int4 PRIMARY KEY NOT NULL DEFAULT NEXTVAL('grado_cursado_id_seq'),
"id_estudiante" int4 NOT NULL,
"id_grupo" int4 NOT NULL,
"año" int4 NOT NULL,
"estado" enum_estado NOT NULL,
CONSTRAINT fk_estudiante_gc FOREIGN KEY (id_estudiante) REFERENCES Estudiante(id_estudiante) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT fk_grupo_gc FOREIGN KEY (id_grupo) REFERENCES  Grupo(id_grupo) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE Materia(
"id_materia" int4 PRIMARY KEY NOT NULL DEFAULT NEXTVAL('materia_id_seq'),
"cod_materia" VARCHAR(6) NOT NULL,
"nombre_materia" VARCHAR(100) NOT NULL,
"cod_profesor" int4 NOT NULL,
"6" bool not null,
"7" bool not null,
"8" bool not null,
"9" bool not null,
"10" bool not null,
"11" bool not null,
CONSTRAINT fk_profesor_materia FOREIGN KEY (cod_profesor) REFERENCES  Profesor(cod_profesor) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE Grupo_Materia(
"id_grupo_materia" int4 PRIMARY KEY NOT NULL DEFAULT NEXTVAL('grado_materia_id_seq'),
"id_grupo" int4 NOT NULL,
"id_materia" int4 NOT NULL,
CONSTRAINT fk_grupo_gm FOREIGN KEY (id_grupo) REFERENCES Grupo(id_grupo) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT fk_materia_gm FOREIGN KEY (id_materia) REFERENCES  Materia(id_materia) ON DELETE RESTRICT ON UPDATE CASCADE
);

create table Notas (
"id_nota" int4 PRIMARY KEY NOT NULL DEFAULT NEXTVAL ('notas_id_seq'),
"id_materia" int4 not null, 
"id_estudiante" int4 not null,
"seguimiento" float4 NULL DEFAULT 0,
"conocimiento" float4 NULL DEFAULT 0,
"bimensual" float4 NULL DEFAULT 0,
"autoevaluacion" float4 NULL DEFAULT 0,
CONSTRAINT fk_materia_notas FOREIGN KEY (id_materia) REFERENCES  Materia(id_materia) ON DELETE RESTRICT ON UPDATE CASCADE,
CONSTRAINT fk_estudiante_notas FOREIGN KEY (id_estudiante) REFERENCES Estudiante(id_estudiante) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- insert 

INSERT INTO grado_cursado VALUES (nextval('id_grado_cursado'), 1, 1, 2021, 'En curso');