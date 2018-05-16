CREATE DATABASE IF NOT EXISTS `studentevolution`;

USE `studentevolution`;

CREATE TABLE IF NOT EXISTS `user` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL UNIQUE,
	`login` varchar(255) NOT NULL UNIQUE,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	`data_nascimento` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

