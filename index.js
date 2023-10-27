const express = require("express");
const cors = require("cors");

const path = require("path");
const client = require("./data-source");
const mountRoutes = require("./routes/index");
require("dotenv").config();

const app = express();
app.use(cors()); // Enable CORS for all routes

app.use(express.json());
mountRoutes(app);

app.get("/fetchData", async (req, res) => {
  try {
    const query = "SELECT * FROM movies";
    const result = await client.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error("Error executing SQL query:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api", async (req, res) => {
  try {
    res.json("Hello World from the backend!");
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Anything that doesn't match the above, send back the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`);
});
