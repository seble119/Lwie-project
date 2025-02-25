const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "user_registration",
    password: "12212729",
    port: 5432,

});

module.exports = pool;
