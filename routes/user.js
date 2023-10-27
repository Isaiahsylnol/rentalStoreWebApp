const Router = require("express-promise-router");
const client = require("../data-source");
const bcrypt = require("bcryptjs");

const router = new Router();

router.get("/test", async (req, res) => {
  res.send("user route API");
});

router.post("/register", async (req, res) => {
  const { email, username, password, first_name, last_name } = req.body;

  let passwordHash = await bcrypt.hash(password, 8);
  const text =
    "INSERT INTO users (email, username, password, first_name, last_name) VALUES ($1, $2, $3, $4, $5) RETURNING id, password";
  const values = [email, username, passwordHash, first_name, last_name];

  try {
    const result = await client.query(text, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error executing SQL query:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const text =
    "SELECT id, email, first_name, password FROM users WHERE email = $1";
  const values = [email];

  try {
    const result = await client.query(text, values);

    if (result.rows.length > 0) {
      const passwordHashBuffer = result.rows[0].password;
      const storedPasswordHashString = passwordHashBuffer.toString("hex");

      let hashResult = await bcrypt.compare(password, storedPasswordHashString);

      if (hashResult) {
        const user = {
          id: result.rows[0].id,
          first_name: result.rows[0].first_name,
          email: result.rows[0].email,
        };

        res.status(200).send(user);
      } else {
        res.status(400).json({ error: "An error occured" });
      }
    } else {
      console.log("No matching user found.");
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error executing SQL query:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
