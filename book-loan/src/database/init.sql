CREATE DATABASE IF NOT EXISTS book_loan_db;
USE book_loan_db;

-- Tabla de autores
CREATE TABLE Authors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Tabla de libros
CREATE TABLE Books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  stock INT DEFAULT 0,
  authorId INT,
  FOREIGN KEY (authorId) REFERENCES Authors(id)
);

-- Tabla de usuarios
CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE
);

-- Tabla de préstamos
CREATE TABLE Loans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  bookId INT NOT NULL,
  loanDate DATETIME NOT NULL,
  FOREIGN KEY (userId) REFERENCES Users(id),
  FOREIGN KEY (bookId) REFERENCES Books(id)
);
