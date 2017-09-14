DROP DATABASE IF EXISTS userDB;
CREATE DATABASE userDB;
USE userDB;

drop table if exists Users; 
CREATE TABLE Users
(
	id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    user_password varchar(255) Not Null,
    salt varchar(255) not null,
	first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone INT(10) NOT NULL,
    address varchar(255) NOT NULL,
    city varchar(255) NOT NULL,
    state varchar(255)  NOT NULL,
    zip INT(10) NOT NULL,
	PRIMARY KEY (id)
);
Drop table if exists Leads;
CREATE TABLE Leads
(
	id int NOT NULL AUTO_INCREMENT,
	company_name varchar(255) NOT NULL,
    job_title varchar(255) NOT NULL,
    phone INT(10) NOT NULL,
    contacted boolean NOT NULL,
    address varchar(255) NOT NULL,
    city varchar(255) NOT NULL,
    state varchar(255)  NOT NULL,
    zip INT(10) NOT NULL,
	PRIMARY KEY (id)
);