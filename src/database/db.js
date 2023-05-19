const mysql = require('mysql');

// Buat koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ferdifir',
  database: 'exopets_db',
});

// Terapkan koneksi
connection.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal: ', err);
    return;
  }
  console.log('Terhubung ke database');
});

module.exports = connection;
