const mysql = require("mysql2");

const dbconfig = {
  host: "mysqldb.cu7y4uteqkj1.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  port: 3306,
  database: 'mydb'
};


let conn = mysql.createConnection(dbconfig);
conn.connect((err) => {
  if (err) {
    return console.log(err)
  }
  return console.log('connect to database!')
})

module.exports = conn;