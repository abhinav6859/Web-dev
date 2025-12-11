const express = require("express");
const connectDB = require("../config/db");
const Person = require("./Models/person");

const app = express();
const port = 3000;

app.use(express.json());

// Start DB then server so logs are in correct order
(async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server because DB connection failed:", err);
    process.exit(1); // optional: stop app if DB connection fails
  }
})();

// Routes

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Create a new person
app.post("/persons", async (req, res) => {
  try {
    const { name, age, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "name and email are required" });
    }

    const existing = await Person.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "A person with this email already exists" });
    }

    const newperson = new Person({ name, age, email });
    await newperson.save();
    console.log("Person saved:", newperson);
    res.status(201).json({ message: "Person created successfully", person: newperson });
  } catch (err) {
    console.error("Error creating person:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get all persons
app.get("/persons", async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    
    console.error("Error fetching persons:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get one person by id
app.get("/persons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.findById(id);
    if (!person) return res.status(404).json({ message: "Person not found" });
    res.json(person);
  } catch (err) {
    console.error("Error fetching person:", err);
    res.status(400).json({ message: "Invalid id or bad request" });
  }
});

// Replace / update whole person (PUT)
app.put("/persons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "name and email are required for full update" });
    }

    const updated = await Person.findByIdAndUpdate(
      id,
      { name, age, email },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ message: "Person not found" });
    res.json({ message: "Person updated successfully", person: updated });
  } catch (err) {
    console.error("Error updating person (PUT):", err);
    res.status(400).json({ message: "Invalid id or bad request" });
  }
});

// Partial update (PATCH)
app.patch("/persons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    // optional: sanitize/whitelist fields here
    const updated = await Person.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Person not found" });
    res.json({ message: "Person updated successfully", person: updated });
  } catch (err) {
    console.error("Error updating person (PATCH):", err);
    res.status(400).json({ message: "Invalid id or bad request" });
  }
});

// Delete person by id
app.delete("/persons/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Person.findByIdAndDelete(id);
    if (!removed) return res.status(404).json({ message: "Person not found" });
    res.json({ message: "Person deleted successfully", person: removed });
  } catch (err) {
    console.error("Error deleting person:", err);
    res.status(400).json({ message: "Invalid id or bad request" });
  }
});
