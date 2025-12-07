// server.js
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const app = express();
app.use(express.json());

// Allow your frontend origin(s). For development use http://localhost:3000 or use '*' carefully.
app.use(cors({
  origin: ["http://localhost:3000"], // change or remove as needed
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

// OPTIONAL: set a conservative Content-Security-Policy header
// Uncomment and edit if you serve HTML from this server and need to control CSP.
// app.use((req, res, next) => {
//   res.setHeader(
//     "Content-Security-Policy",
//     "default-src 'self'; connect-src 'self' http://localhost:5000; script-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline';"
//   );
//   next();
// });

// OPTIONAL: serve static files from ./public
// app.use(express.static(path.join(__dirname, "public")));

// In-memory "database"
let users = [
  { id: uuidv4(), name: "John Doe", age: 25 },
  { id: uuidv4(), name: "Jane Smith", age: 30 },
];

// Helper: basic validation
function validateUserPayload(body) {
  if (!body || typeof body !== "object") return "Request body must be JSON";
  if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2)
    return "Name is required and must be at least 2 characters";
  if (body.age === undefined || typeof body.age !== "number" || body.age < 0)
    return "Age is required and must be a non-negative number";
  return null;
}

// GET /users - list all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET /users/:id - get one user
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// POST /users - create a new user
app.post("/users", (req, res) => {
  const err = validateUserPayload(req.body);
  if (err) return res.status(400).json({ message: err });

  const newUser = {
    id: uuidv4(),
    name: req.body.name.trim(),
    age: req.body.age,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id - replace existing user
app.put("/users/:id", (req, res) => {
  const err = validateUserPayload(req.body);
  if (err) return res.status(400).json({ message: err });

  const idx = users.findIndex(u => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "User not found" });

  users[idx] = {
    id: req.params.id, // keep same id
    name: req.body.name.trim(),
    age: req.body.age,
  };
  res.json(users[idx]);
});

// PATCH /users/:id - partially update user (optional)
app.patch("/users/:id", (req, res) => {
  const idx = users.findIndex(u => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ message: "User not found" });

  const user = users[idx];
  if (req.body.name !== undefined) {
    if (typeof req.body.name !== "string" || req.body.name.trim().length < 2)
      return res.status(400).json({ message: "Name must be at least 2 characters" });
    user.name = req.body.name.trim();
  }
  if (req.body.age !== undefined) {
    if (typeof req.body.age !== "number" || req.body.age < 0)
      return res.status(400).json({ message: "Age must be a non-negative number" });
    user.age = req.body.age;
  }
  users[idx] = user;
  res.json(user);
});

// DELETE /users/:id - delete user
app.delete("/users/:id", (req, res) => {
  const initialLen = users.length;
  users = users.filter(u => u.id !== req.params.id);
  if (users.length === initialLen) return res.status(404).json({ message: "User not found" });
  res.json({ message: "User deleted successfully" });
});

// Simple health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
