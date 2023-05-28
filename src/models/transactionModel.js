const db = require("../database/db");

exports.addTransaction = (
  user_id,
  product_id,
  quantity,
  total_amount,
  status,
  payment_method,
  shipping_address_id,
  callback
) => {
  const query =
    "INSERT INTO transactions (user_id, product_id, transaction_date, quantity, total_amount, status, payment_method, shipping_address_id) VALUES (?, ?, NOW(), ?, ?, ?, ?, ?)";
  const values = [
    user_id,
    product_id,
    quantity,
    total_amount,
    status,
    payment_method,
    shipping_address_id,
  ];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.getTransaction = (uid, callback) => {
  const query =
    "SELECT * FROM transactions JOIN products ON transactions.product_id = products.pid WHERE user_id = ?";
  const values = [uid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.addPayment = (transaction_id, sender_name, url_bukti, callback) => {
  const query =
    "INSERT INTO payment (transaction_id, sender_name, bank_transfer_info) VALUES (?, ?, ?)";
  const values = [transaction_id, sender_name, url_bukti];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.getPayment = (callback) => {
  const query =
    "SELECT * FROM payment JOIN transactions ON payment.transaction_id = transactions.transaction_id JOIN products ON transactions.product_id = products.pid JOIN users ON transactions.user_id = users.uid WHERE status = 'Awaiting Payment'";
  db.query(query, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.updateStatus = (transaction_id, status, callback) => {
  const query = "UPDATE transactions SET status = ? WHERE transaction_id = ?";
  const values = [status, transaction_id];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};
