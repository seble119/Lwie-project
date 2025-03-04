const pool = require("../../db");

const getuser_registration = (req, res) => {
    pool.query("SELECT * FROM user_registration", (error, results) => {
        if (error) {
            console.error("Database error:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.status(200).json(results.rows); // 200 for success
    });
};

module.exports = {
    getuser_registration,
};
