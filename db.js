const { Pool } = require("pg");
require("dotenv").config(); // Load environment variables

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Required for Render.com PostgreSQL
    },
});

module.exports = pool;
