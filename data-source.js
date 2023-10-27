const { Client } = require("pg");
require("dotenv").config();
// Create a new PostgreSQL client

const client = new Client({
  connectionString: process.env.REACT_APP_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
