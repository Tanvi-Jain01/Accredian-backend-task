

const express = require('express');
const mysql = require('mysql2');


const cors = require('cors'); // Import cors middleware
const app = express();

// app.use(cors()); // Enable CORS

// app.use(cors({
//   origin: 'http://localhost:3000', // Replace with your React app's origin
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Middleware to parse JSON bodies
app.use(express.json());



var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
    port: 3307,
  });

//   if any error arrives during connection

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


  app.post('/register', (req, res) => {
    const { uname, email, pswd } = req.body;

    // Add validation logic if needed

    const sql = "INSERT INTO accrediate (user_name, user_email, user_pswd) VALUES (?, ?, ?)";
    con.query(sql, [uname, email, pswd], (err, result) => {
        if (err) {
            // if (err.code === 'ER_DUP_ENTRY') {
            //     // Duplicate entry error (e.g., duplicate email)
            //     console.log("Email already exists");
            //     res.status(409).json({ error: "Email already exists" });
            // } else{
            console.error("Error inserting into the database:", err);
            res.status(500).json({ error: "Internal Server Error" });
            }
       else {
            console.log("Record inserted successfully! -3");
            res.status(200).json({ message: "Registration successful" });
        }
    });
});



app.post('/login', (req, res) => {
    const { email, pswd } = req.body;

    // Add validation logic if needed

    const sql = "SELECT * FROM accrediate WHERE user_email = ? AND user_pswd = ?";
    con.query(sql, [email, pswd], (err, result) => {
        if (err) {
            console.error("Error querying the database:", err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            if (result.length > 0) {
                // User found, credentials are correct
                res.status(200).json({ message: "Login successful" });

            } else {
                // No matching user found, credentials are incorrect
                res.status(401).json({ error: "Invalid email or password" });
            }
        }
    });
});





const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  
  module.exports = con;