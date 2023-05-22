const db = require('../database/db');

exports.getAllProducts = (callback) => {
    const query = 'SELECT pid, image, product_name, category, price FROM products';
    db.query(query, (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
}

exports.getProductById = (pid, callback) => {
    const query = 'SELECT * FROM products JOIN stores ON products.store_id = stores.sid JOIN users ON stores.user_id = users.uid WHERE pid = ?';
    const values = [pid];
    db.query(query, values, (err, result) => {
        if (err) {
            return callback(err);
        }
        callback(null, result);
    });
}