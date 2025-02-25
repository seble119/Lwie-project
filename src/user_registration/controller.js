const pool = require('../../db');
const getuser_registration = (req, res) => {
    pool.query("SELECT * FROM user_registration", (error, results) => {
        if (error) throw error;
        res.status(500).json(results.rows);
    });

};

module.exports = {
    getuser_registration,
};