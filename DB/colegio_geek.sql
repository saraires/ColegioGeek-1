-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-01-2021 a las 21:17:38
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `colegio_geek`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `codigo` int(7) NOT NULL,
  `grado` enum('6','7','8','9','10','11','Egresado','Retirado') NOT NULL,
  `foto` blob NOT NULL,
  `foto_doc` blob NOT NULL,
  `estado` int(1) NOT NULL COMMENT '1= En curso, 2= Aprobado, 3= Reprobado',
  `nota_promedio` float(2,1) DEFAULT NULL,
  `id_usuario` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grado`
--

CREATE TABLE `grado` (
  `id_profesor` int(10) NOT NULL,
  `grado` int(2) NOT NULL,
  `id_grado` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `id_grupo` int(8) NOT NULL,
  `id_profesor` int(10) NOT NULL,
  `jornada` enum('Mañana','Tarde') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `id_materia` int(5) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `codigo` varchar(6) NOT NULL,
  `id_profesor` int(7) NOT NULL,
  `sexto` tinyint(1) NOT NULL,
  `septimo` tinyint(1) NOT NULL,
  `octavo` tinyint(1) NOT NULL,
  `noveno` tinyint(1) NOT NULL,
  `decimo` tinyint(1) NOT NULL,
  `once` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas`
--

CREATE TABLE `notas` (
  `codigo_materia` int(7) NOT NULL,
  `codigo_grupo` int(7) NOT NULL,
  `codigo_estudiante` int(7) NOT NULL,
  `nota` float(2,1) DEFAULT NULL,
  `id` int(7) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id_usuario` int(7) NOT NULL,
  `materia` int(5) NOT NULL,
  `grado` int(8) NOT NULL,
  `codigo` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `numero_doc` int(11) NOT NULL,
  `tipo_doc` enum('TI','CC','NUIP') NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `sexo` enum('M','F') NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `ciudad` varchar(30) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `celular` varchar(10) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(200) NOT NULL,
  `rol` int(1) NOT NULL COMMENT '1= Administrador, 2= Profesor, 3= Estudiante',
  `id` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `documento` (`id_usuario`);

--
-- Indices de la tabla `grado`
--
ALTER TABLE `grado`
  ADD PRIMARY KEY (`id_grado`),
  ADD KEY `id_profesor` (`id_profesor`);

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`id_grupo`),
  ADD KEY `id_profesor` (`id_profesor`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`id_materia`),
  ADD UNIQUE KEY `codigo` (`codigo`),
  ADD KEY `id_profesor` (`id_profesor`);

--
-- Indices de la tabla `notas`
--
ALTER TABLE `notas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codigo_materia` (`codigo_materia`),
  ADD KEY `codigo_grupo` (`codigo_grupo`),
  ADD KEY `codigo_estudiante` (`codigo_estudiante`) USING BTREE;

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `materia` (`materia`),
  ADD KEY `grado` (`grado`),
  ADD KEY `documento` (`id_usuario`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `codigo` int(7) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grado`
--
ALTER TABLE `grado`
  MODIFY `id_grado` int(7) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `id_grupo` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `id_materia` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notas`
--
ALTER TABLE `notas`
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `profesor`
--
ALTER TABLE `profesor`
  MODIFY `codigo` int(7) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(7) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `grado`
--
ALTER TABLE `grado`
  ADD CONSTRAINT `grado_ibfk_1` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`codigo`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD CONSTRAINT `grupos_ibfk_1` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`codigo`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `materias`
--
ALTER TABLE `materias`
  ADD CONSTRAINT `materias_ibfk_1` FOREIGN KEY (`id_profesor`) REFERENCES `profesor` (`codigo`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `notas`
--
ALTER TABLE `notas`
  ADD CONSTRAINT `notas_ibfk_1` FOREIGN KEY (`codigo_materia`) REFERENCES `materias` (`id_materia`) ON UPDATE CASCADE,
  ADD CONSTRAINT `notas_ibfk_2` FOREIGN KEY (`codigo_grupo`) REFERENCES `grupos` (`id_grupo`) ON UPDATE CASCADE,
  ADD CONSTRAINT `notas_ibfk_3` FOREIGN KEY (`codigo_estudiante`) REFERENCES `estudiante` (`codigo`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD CONSTRAINT `profesor_ibfk_2` FOREIGN KEY (`materia`) REFERENCES `materias` (`id_materia`) ON UPDATE CASCADE,
  ADD CONSTRAINT `profesor_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
