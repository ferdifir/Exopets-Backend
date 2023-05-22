const db = require("../database/db");

exports.addAddress = (uid, address, city, province, postal_code, callback) => {
  const query =
    "INSERT INTO addresses (user_id, street_address, city, province, postal_code) VALUES (?, ?, ?, ?, ?)";
  const values = [uid, address, city, province, postal_code];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.getAddress = (uid, callback) => {
  const query =
    "SELECT * FROM addresses JOIN users ON addresses.user_id = users.uid WHERE user_id = ?";
  const values = [uid];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.getAddressById = (uid, id, callback) => {
  const query =
    "SELECT * FROM addresses JOIN users ON addresses.user_id = users.uid WHERE user_id = ? AND address_id = ?";
  const values = [uid, id];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

exports.deleteAddress = (uid, id, callback) => {
  const query = "DELETE FROM addresses WHERE user_id = ? AND address_id = ?";
  const values = [uid, id];
  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};
