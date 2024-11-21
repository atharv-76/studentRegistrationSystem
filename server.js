const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "Abcd@1234", // Replace with your MySQL password
  database: "regdb", // The database you're using
});

// Check database connection
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// POST route to register a student
app.post("/api/students/register", (req, res) => {
  const { name, email, phoneNumber, password } = req.body;

  if (!name || !email || !phoneNumber || !password) {
    console.error("Validation failed. Missing fields:", req.body);
    return res.status(400).json({ error: "All fields are required" });
  }

  const emailCheckQuery = "SELECT email FROM name WHERE email = ?";
  db.query(emailCheckQuery, [email], (err, results) => {
    if (err) {
      console.error("Error checking email:", err);
      return res.status(500).json({ error: "Error checking email" });
    }

    if (results.length > 0) {
      console.error("Email already exists:", email);
      return res.status(409).json({ error: "Email already registered" });
    }

    const query =
      "INSERT INTO name (name, email, phonenumber, password) VALUES (?, ?, ?, ?)";
    db.query(query, [name, email, phoneNumber, password], (err, result) => {
      if (err) {
        console.error("Error inserting into database:", err);
        return res.status(500).json({ error: "Error registering student" });
      }

      console.log("Registration successful:", result);
      res.status(201).json({ id: result.insertId, name, email, phoneNumber });
    });
  });
});
// POST route to login a student
app.post("/api/students/login", (req, res) => {
  const { email, password } = req.body;

  // Validate that email and password are provided
  if (!email || !password) {
    console.error("Validation failed. Missing fields:", req.body);
    return res.status(400).json({ error: "Both email and password are required" });
  }

  // Query to check if the email exists in the database
  const query = "SELECT * FROM name WHERE email = ?";
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error checking email:", err);
      return res.status(500).json({ error: "Error checking email" });
    }

    if (results.length === 0) {
      console.error("Email not found:", email);
      return res.status(404).json({ error: "Email not found" });
    }

    const user = results[0];

    
    if (user.password !== password) {
      console.error("Incorrect password for email:", email);
      return res.status(401).json({ error: "Incorrect password" });
    }

    console.log("Login successful:", user);
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phonenumber
      }
    });
  });
});



// GET route to fetch all students
app.get("/api/students", (req, res) => {
  const query = "SELECT id, name, email, phonenumber FROM name"; 
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching students:", err);
      return res.status(500).json({ error: "Error fetching students data." });
    }
    res.status(200).json(results);
  });
});


app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
