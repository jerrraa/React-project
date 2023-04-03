const db = require('../connection');

module.exports = {
    index: (req, res) => {
        db.query('SELECT * FROM items', (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    sql: err.sql,
                });
            }
            res.json({
                message: 'success',
                data: results,
            });
        });
    },
    //category_id, title, description, price, quantity, sku
    store: (req, res) => {
        const {category_id, title, description, price, quantity, sku} = req.body;
        db.query('INSERT INTO items (category_id, title, description, price, quantity, sku) VALUES (?, ?, ?, ?, ?, ?)', [category_id, title, description, price, quantity, sku], (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    sql: err.sql,
                });
            }
            res.json({
                message: 'success',
                data: results,
            });
        });
    },
    update: (req, res) => {
        const {id} = req.params;
        const {category_id, title, description, price, quantity, sku} = req.body;
        db.query('UPDATE items SET category_id = ?, title = ?, description = ?, price = ?, quantity = ?, sku = ? WHERE id = ?', [category_id, title, description, price, quantity, sku, id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    sql: err.sql,
                });
            }
            res.json({
                message: 'success',
                data: results,
            });
        });
    },
    destroy: (req, res) => {
        const {id} = req.params;
        db.query('DELETE FROM items WHERE id = ?', [id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    sql: err.sql,
                });
            }
            res.json({
                message: 'success',
                data: results,
            });
        });
    },

};
