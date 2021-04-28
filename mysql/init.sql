CREATE DATABASE pfa;

USE pfa;

CREATE TABLE fullcycle_modules(
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL
); 

INSERT INTO fullcycle_modules (name) values('DOCKER');
INSERT INTO fullcycle_modules (name) values('FUNDAMENTOS DE ARQUITETURA DE SOFTWARE');
INSERT INTO fullcycle_modules (name) values('COMUNICAÇÃO');
INSERT INTO fullcycle_modules (name) values('RABBITMQ');
INSERT INTO fullcycle_modules (name) values('AUTENTICAÇÃO E KEYCLOAK');