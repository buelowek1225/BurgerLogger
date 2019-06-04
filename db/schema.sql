-- Created the DB 
DROP DATABASE IF EXISTS burger_db

CREATE DATABASE burger_db;
USE burger_db;

-- Created the table "schools" 
CREATE TABLE burgers
(
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar (30) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY
  (id)
);

