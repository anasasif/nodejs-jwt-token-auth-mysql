const mysql = require('mysql');
const connection = mysql.createConnection({
  connectionLimit: 300,
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.MYSQL_PORT,
});

connection.connect(err => {
  if (err) {
    return;
  }
});


// const connection = mysql.createPool({
//   connectionLimit: 300,
//   host: process.env.DB_HOSTNAME,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE
//   port: process.env.MYSQL_PORT,
// });

// connection.getConnection((err, connection) => {
//   if (err)
//     throw err;
//   connection.release();
// });




module.exports = connection;







