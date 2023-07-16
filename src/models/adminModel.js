const db = require("../database/db");

exports.login = (email, password, callback) => {
  const query =
    "SELECT * FROM admin JOIN users ON admin.user_id = users.uid WHERE email = ? AND password = ?";
  const values = [email, password];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.isAdmin = (uid, callback) => {
  const query = "SELECT * FROM admin WHERE user_id = ?";
  const values = [uid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.getAllProduct = (callback) => {
  const query = "SELECT * FROM products";
  db.query(query, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.approveProduct = (pid, callback) => {
  const query = "UPDATE products SET is_approved = true WHERE pid = ?";
  const values = [pid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.deleteProduct = (pid, callback) => {
  const query = "DELETE FROM products WHERE pid = ?";
  const values = [pid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.getAllUser = (callback) => {
  const query =
    "SELECT * FROM users WHERE uid NOT IN (SELECT user_id FROM admin)";
  db.query(query, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.deleteUser = (uid, callback) => {
  const query = "DELETE FROM users WHERE uid = ?";
  const values = [uid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.getTransactions = (callback) => {
  //const query = "SELECT * FROM transactions JOIN users ON transactions.user_id = users.uid JOIN products ON transactions.product_id = products.pid WHERE transactions.status = 'Awaiting Payment'";
  const query = "SELECT * FROM payment JOIN transactions ON payment.transaction_id = transactions.transaction_id JOIN users ON transactions.user_id = users.uid JOIN products ON transactions.product_id = products.pid";
  db.query(query, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};
