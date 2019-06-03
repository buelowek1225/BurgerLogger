-- Created the DB 
CREATE DATABASE burger_db;
USE burger_db;

-- Created the table "schools" 
CREATE TABLE burgers
(
  id int AUTO_INCREMENT,
  burger_name varchar (30) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY
  (id)
);

