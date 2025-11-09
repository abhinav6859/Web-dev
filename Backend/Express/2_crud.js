
const express = require("express");

// Create an Express app instance
const app = express();

// Middleware to parse JSON data from requests (important for POST/PUT)
app.use(express.json());

// Simulated database (in-memory array)
let users = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
];

// =============== ROUTES ===============

// ✅ GET (Read) - fetch all users
app.get("/users", (req, res) => {
  // send all users as JSON response
  res.json(users);
});

// ✅ GET (Read) - fetch single user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id); // get id from URL
  const user = users.find((u) => u.id === userId);

  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
});

// ✅ POST (Create) - add a new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1, // simple ID generator
    name: req.body.name,
    age: req.body.age,
  };

  users.push(newUser); // add to our in-memory array
  res.status(201).json(newUser); // send created user
});

// ✅ PUT (Update) - update existing user by ID
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    // Update the user
    users[userIndex] = {
      id: userId,
      name: req.body.name,
      age: req.body.age,
    };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// ✅ DELETE - remove user by ID
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((u) => u.id !== userId);
  res.json({ message: "User deleted successfully" });
});

// =============== START SERVER ===============
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
