const express = require("express")
const app = express()
var mysql = require("mysql")
const bcrypt = require('bcrypt')

let connect_db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB,
})

module.exports.saveUser = (user, email, passwordToken) => {
  console.log(user, email, passwordToken)
  const sql = `INSERT INTO users (name, email, userToken) VALUES ('${user}', '${email}', '${passwordToken}')`;
  connect_db.query(sql, (err, result) => {
    if (err) throw err
    console.log(result)
  })
}

module.exports.getUserPassword = (email, userToken) => {
  const sql = `SELECT userToken FROM users WHERE email = '${email}'`;
  return connect_db.query(sql, (err, result) => {
    if (process.env.CONSOLE_LOGGING === true) {
      console.log("Query Log: " + result)
    }

    return bcrypt.compare(userToken, result[0].userToken, (err, res) => {
      return res
    })
  })
}

module.exports.message = (data) => {
  console.log(data.email, data.name);
  const sql = `INSERT INTO messages (email, name, message) VALUES ('${data.email}', '${data.name}', '${data.message}')`;
  connect_db.query(sql, (err, result) => {
      if (err) throw err
      console.log("1 record inserted (53)")
  })
}