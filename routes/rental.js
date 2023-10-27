const Router = require("express-promise-router");
const client = require("../data-source");

const router = new Router();

router.get("/test", async (req, res) => {
  res.send("Rental API");
});

router.get("/list-rental/:id", async (req, res) => {
  const { id } = req.params;
  const { rows } = await client.query(
    "SELECT * FROM user_rental WHERE user_id = $1",
    [id]
  );
  res.send(rows);
});

router.post("/create-rental", async (req, res) => {
  const { user_id, film_id, title, duration, return_date, start_date } =
    req.body;

  const text =
    "INSERT INTO user_rental (user_id, film_id, title, duration, return_date, start_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, title";
  const values = [user_id, film_id, title, duration, return_date, start_date];

  try {
    const result = await client.query(text, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing SQL query:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
