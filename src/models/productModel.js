const db = require("../database/db");

exports.getAllProducts = (callback) => {
  const query =
    "SELECT pid, image, product_name, category, price FROM products WHERE is_approved = true";
  db.query(query, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.getMyProducts = (uid, callback) => {
  const query =
    "SELECT pid, image, product_name, category, price FROM products WHERE store_id = ?";
  const values = [uid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.getProductById = (pid, callback) => {
  const query =
    "SELECT * FROM products JOIN stores ON products.store_id = stores.sid JOIN users ON stores.user_id = users.uid WHERE pid = ?";
  const values = [pid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.searchProduct = (keyword, callback) => {
  const query =
    "SELECT pid, image, product_name, category, price FROM products WHERE product_name LIKE ?";
  const values = ["%" + keyword + "%"];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.uploadProduct = (product, callback) => {
  const query = "INSERT INTO products SET ?";
  db.query(query, product, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};
