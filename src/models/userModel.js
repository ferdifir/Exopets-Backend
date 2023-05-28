const db = require("../database/db");

exports.registerUser = (
  uid,
  name,
  email,
  password,
  phone,
  address,
  profile_picture,
  callback
) => {
  const query =
    "INSERT INTO users (uid, name, email, password, phone, address, profile_picture) VALUES (?, ?, ?, ?, ?, POINT(0.0,0.0), ?)";
  const values = [uid, name, email, password, phone, address, profile_picture];

  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }

    const userId = result.insertId;
    callback(null, userId);
  });
};

exports.loginUser = (uid, callback) => {
  const query = "SELECT * FROM users WHERE uid = ?";
  const values = [uid];

  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
};

exports.editUser = (
  uid,
  name,
  email,
  phone,
  lat,
  lon,
  profile_picture,
  callback
) => {
  const query =
    "UPDATE users SET name = ?, email = ?, phone = ?, address = POINT(?,?), profile_picture = ? WHERE uid = ?";
  const values = [name, email, phone, lat, lon, profile_picture, uid];

  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
};

exports.isUidExist = (uid, callback) => {
  const query = "SELECT uid FROM users WHERE uid = ?";
  const values = [uid];

  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
};

exports.getAdmin = (callback) => {
  const query = 'SELECT * FROM admin JOIN users ON admin.user_id = users.uid';
  db.query(query, (err, result) => {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
};

exports.addReport = (user_id, report, callback) => {
  const query = 'INSERT INTO report (user_id, report_reason) VALUES (?, ?)';
  const values = [user_id, report];

  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }

    callback(null, result.insertId);
  });
}

exports.getReport = (callback) => {
  const query = 'SELECT * FROM report JOIN users ON report.user_id = users.uid';
  db.query(query, (err, result) => {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
}