const Router = require("express-promise-router");
const client = require("../data-source");

const router = new Router();

router.get("/test", async (req, res) => {
  res.send("test API");
});

router.get("/list", async (req, res) => {
  const result = await client.query("SELECT * FROM movies");
  res.json(result.rows);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await client.query("SELECT * FROM movies WHERE id = $1", [
    id,
  ]);
  res.send(rows[0]);
});

router.get("/find/:title", async (req, res) => {
  const { title } = req.params;
  const text = "SELECT * FROM movies WHERE title ILIKE $1";
  const searchTermWithWildcards = `%${title}%`;

  try {
    const result = await client.query(text, [searchTermWithWildcards]);
    res.json({ search: result.rows });
  } catch (error) {
    console.error("Error executing SQL query:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
