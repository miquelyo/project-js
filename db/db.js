const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'project-js',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Database Error:', err);
  } else {
    console.log('Database Sudah Terkoneksi');
  }
});

module.exports = connection;