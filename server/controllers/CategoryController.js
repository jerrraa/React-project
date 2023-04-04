const db = require("../connection");

module.exports = {
    index: (req, res) => {
        db.query("SELECT * FROM category", (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    sql: err.sql,
                });
            }
            res.json({
                message: "category success",
                data: results,
            });
        });
    },
    store: (req, res) => {
        const {name} = req.body;
        db.query("INSERT INTO category (name) VALUES (?)", [name], (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    sql: err.sql,
                });
            }
            res.json({
                message: "success",
                data: results,
            });
        });
    },
    update: (req, res) => {
        const {category_id} = req.params;
        const {name} = req.body;
        db.query("UPDATE category SET name = ? WHERE category_id = ?", [name, category_id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    sql: err.sql,
                });
            }
            res.json({
                message: "success",
                data: results,
            });
        });
    },
    destroy: (req, res) => {
        const {category_id} = req.params;
        db.query("DELETE FROM category WHERE category_id = ?", [id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    sql: err.sql,
                });
            }
            res.json({
                message: "success",
                data: results,
            });
        });
    },




}
