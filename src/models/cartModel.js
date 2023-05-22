const db = require("../database/db");

exports.addToCart = (uid, pid, callback) => {
  const query =
    "INSERT INTO carts (user_id, product_id, created_at) VALUES (?, ?, NOW())";
  const values = [uid, pid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.getCart = (uid, callback) => {
  const query =
    "SELECT * FROM carts JOIN products ON carts.product_id = products.pid WHERE user_id = ?";
  const values = [uid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.deleteCartById = (uid, pid, callback) => {
  const query = "DELETE FROM carts WHERE user_id = ? AND product_id = ?";
  const values = [uid, pid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};
