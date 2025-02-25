const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use an environment variable for security
    ssl: { rejectUnauthorized: false } // Required for Neon database
});

module.exports = pool;
