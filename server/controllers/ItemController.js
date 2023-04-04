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
                message: 'stored',
                data: results,
            });
        });
    },
    update: (req, res) => {
        const {item_id} = req.params;
        const {category_id, title, description, price, quantity, sku} = req.body;
        db.query('UPDATE items SET category_id = ?, title = ?, description = ?, price = ?, quantity = ?, sku = ? WHERE item_id = ?', [category_id, title, description, price, quantity, sku, item_id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    sql: err.sql,
                });
            }
            res.json({
                message: 'updated',
                data: results,
            });
        });
    },
    destroy: (req, res) => {
        const {item_id} = req.params;
        db.query('DELETE FROM items WHERE item_id = ? <> 0', [item_id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err.message,
                    sql: err.sql,
                });
            }
            res.json({
                message: 'deleted',
                data: results,
            });
        });
    },

};
