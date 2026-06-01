/**
 * Simple Node.js Backend Example
 *
 * This project demonstrates a basic REST API using Express.
 * It allows reading, creating, updating, and deleting entries
 * stored in a local JSON file (db.json).
 */

import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 3334;
const DB_FILE = "db.json";

// Standard CORS configuration
app.use(
  cors({
    origin: "*",
  }),
);

// Middleware to parse JSON request bodies
app.use(express.json());

/**
 * Reads the current database from the JSON file.
 * @returns {Array} The list of items.
 */
function readDB() {
  // fs.readFileSync returns a string ("utf-8")
  // JSON.parse converts the JSON string into a JavaScript object
  return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
}

/**
 * Writes the given data back to the JSON file.
 * @param {Array} data - The list of items to save.
 */
function writeDB(data) {
  // JSON.stringify converts an object to a string.
  // The '2' parameter defines the indentation (2 spaces) for better readability.
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// GET route: Returns all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(readDB());
});

// POST route: Adds a new task
app.post("/tasks", (req, res) => {
  const data = readDB();
  data.push(req.body);
  writeDB(data);
  res.status(201).json({ message: "Task successfully added" });
});

// PUT route: Updates an existing task by its index
app.put("/tasks/:id", (req, res) => {
  const data = readDB();
  const id = parseInt(req.params.id);

  if (data[id]) {
    data[id] = req.body;
    writeDB(data);
    res.status(200).json({ message: "Task successfully updated" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// DELETE route: Deletes a task by its index
app.delete("/tasks/:id", (req, res) => {
  const data = readDB();
  const id = parseInt(req.params.id);

  if (data[id]) {
    data.splice(id, 1);
    writeDB(data);
    res.status(200).json({ message: "Task successfully deleted" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// Start the server on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
