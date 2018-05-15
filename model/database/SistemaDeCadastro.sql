CREATE TABLE `User` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL UNIQUE,
	`login` varchar(255) NOT NULL UNIQUE,
	`email` varchar(255) NOT NULL UNIQUE,
	`senha` varchar(255) NOT NULL,
	`data_nascimento` DATE NOT NULL,
	PRIMARY KEY (`id`)
);

