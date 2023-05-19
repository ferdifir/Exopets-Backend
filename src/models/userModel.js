const db = require('../database/db');

exports.registerUser = (uid, name, email, password, phone, address, profile_picture, callback) => {
  const query = 'INSERT INTO users (uid, name, email, password, phone, address, profile_picture) VALUES (?, ?, ?, ?, ?, POINT(0.0,0.0), ?)';
  const values = [uid, name, email, password, phone, address, profile_picture];

  db.query(query, values, (err, result) => {
    if (err) {
      return callback(err);
    }

    const userId = result.insertId;
    callback(null, userId);
  });
};
