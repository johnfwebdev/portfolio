const express = require("express")
const app = express()
var mysql = require("mysql")


let connect_db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB,
})


module.exports.connection = (data) => {
  console.log(data.email, data.name);
  const sql = `INSERT INTO user (email, name, message) VALUES ('${data.email}', '${data.name}', '${data.message}')`;
  connect_db.query(sql, (err, result) => {
      if (err) throw err
      console.log("1 record inserted")
  })
}