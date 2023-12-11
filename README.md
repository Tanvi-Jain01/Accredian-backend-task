# Accredian-backend-task
Accredian Backend Task

-- Database: `test`
'Create database test;'
-- This script is used to create a MySQL database named 'test'.
-- To use this database, uncomment the 'use test;' line.

-- --------------------------------------------------------

-- Table structure for table `accrediate`
-- This section defines the structure of the 'accrediate' table.

CREATE TABLE `accrediate` (
  `user_email` varchar(50) CHARACTER SET utf8 NOT NULL,
  `user_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `user_pswd` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table `accrediate`
-- This section inserts sample data into the 'accrediate' table.

INSERT INTO `accrediate` (`user_email`, `user_name`, `user_pswd`) VALUES
('tmj07042@gmail.com', 'Tanvi', '12345678');
  
-- Indexes for dumped tables
-- This section includes index definitions.

-- Indexes for table `accrediate`
-- Adds a primary key constraint on the 'user_email' column.

ALTER TABLE `accrediate`
  ADD PRIMARY KEY (`user_email`);

-- Commit the changes
-- This command finalizes and commits the changes to the database.

COMMIT;
