-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema api_server
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema api_server
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `api_server` DEFAULT CHARACTER SET utf8 ;
USE `api_server` ;

-- -----------------------------------------------------
-- Table `api_server`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_server`.`user` (
  `id` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT '',
  `password` VARCHAR(45) NOT NULL,
  `gender` TINYINT NULL,
  `age` INT NULL,
  `nation` VARCHAR(45) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

show tables;
use mysql;
select user, host, password from user;
desc user;

-- update mysql.user set password = password('1234') where user = 'root' and host='%'
