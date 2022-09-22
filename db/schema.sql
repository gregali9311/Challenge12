DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department(
    dep_id INT AUTO_INCREMENT PRIMARY KEY,
    dep_name VARCHAR(30)

);

CREATE TABLE roles(
    role_id VARCHAR(30),
    title VARCHAR(30),
    salary DECIMAL,
    dep_id VARCHAR(30)

);

CREATE TABLE employee(
    emp_id INT AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30),
    last_name   VARCHAR(30),
    role_id VARCHAR(30),
    manager_id VARCHAR(30)

    

);


