const db = require("../database/db");

exports.createStore = (uid, store_name, address, description, callback) => {
  const query =
    "INSERT INTO stores (user_id, nama_toko, alamat, description) VALUES (?, ?, ?, ?)";
  const values = [uid, store_name, address, description];

  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }

    const storeId = result.insertId;
    callback(null, storeId);
  });
};

exports.getStoreByUid = (uid, callback) => {
  const query =
    "SELECT * FROM stores JOIN users ON stores.user_id = users.uid WHERE stores.user_id = ?";
  const values = [uid];

  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
};

exports.editStore = (uid, store_name, address, description, callback) => {
  const query =
    "UPDATE stores SET nama_toko = ?, alamat = ?, description = ? WHERE user_id = ?";
  const values = [store_name, address, description, uid];

  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
};
