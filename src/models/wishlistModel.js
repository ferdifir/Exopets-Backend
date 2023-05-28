const db = require("../database/db");

exports.addWishlist = (uid, product_id, callback) => {
  const query = "INSERT INTO wishlist (user_id, product_id) VALUES (?, ?)";
  const values = [uid, product_id];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.getWishlist = (uid, callback) => {
  const query =
    "SELECT * FROM wishlist JOIN products ON wishlist.product_id = products.pid WHERE user_id = ?";
  const values = [uid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.deleteWishlist = (uid, id, callback) => {
  const query = "DELETE FROM wishlist WHERE user_id = ? AND wishlist_id = ?";
  const values = [uid, id];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};
