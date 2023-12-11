-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 11, 2023 at 06:50 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--
-- create database test;
-- use test;
-- --------------------------------------------------------

--
-- Table structure for table `accrediate`
--

CREATE TABLE `accrediate` (
  `user_email` varchar(50) CHARACTER SET utf8 NOT NULL,
  `user_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `user_pswd` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accrediate`
--

INSERT INTO `accrediate` (`user_email`, `user_name`, `user_pswd`) VALUES
('tmj07042@gmail.com', 'Tanvi', '12345678');

--
-- Indexes for dumped tables
--
-- Select * from `accrediate`;
--
-- Indexes for table `accrediate`
--
ALTER TABLE `accrediate`
  ADD PRIMARY KEY (`user_email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
