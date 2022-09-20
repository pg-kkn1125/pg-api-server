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
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT '',
  `password` VARCHAR(45) NOT NULL,
  `gender` TINYINT NULL,
  `age` INT NULL,
  `nation` VARCHAR(45) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  PRIMARY KEY (`id`))default CHARACTER SET utf8 
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `api_server`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `api_server`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `redirect_url` VARCHAR(100) NOT NULL,
  `view_info` VARCHAR(45) NOT NULL,
  `view_start` TIMESTAMP NOT NULL,
  `view_end` TIMESTAMP NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))default CHARACTER SET utf8 
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
use api_server;
select * from user;

