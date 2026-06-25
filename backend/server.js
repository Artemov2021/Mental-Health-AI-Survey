require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(cors());
app.use(express.json());


app.post("/submit", async (req, res) => {
  try {
    const { name, email } = req.body;

    await pool.query(
      "INSERT INTO testers (name, email) VALUES ($1, $2)",
      [name, email]
    );

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB error" });
  }
});

app.listen(3000, () => {
    console.log("Backend running");
});
