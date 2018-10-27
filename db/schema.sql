DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;
USE restaurant_db;

-- Create the tables table
CREATE TABLE tables
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  phone VARCHAR (255) NOT NULL,
  isWaiting BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(id)
);
