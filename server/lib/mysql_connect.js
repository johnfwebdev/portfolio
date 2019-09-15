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
    console.log("1 record inserted")
  })
}

module.exports.getUser = (data) => {
  console.log("Found User")
  console.log(data.userEmail)
  let tokenHash = ''
  const sql = `SELECT * FROM users WHERE email = ${data.email}`;
  connect_db.query(sql, (err, result) => {
    if (err) throw err
    console.log("Password Grabbed")
    
    tokenHash = result.userToken
  })
  
  return tokenHash
}

module.exports.getUserPassword = (email) => {
  console.log(email)
  const sql = `SELECT userToken FROM users WHERE email = '${email}'`;
  connect_db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
      return false
    }
    console.log("Found User: Password Grabbed")
    console.log(result)
  })
  return true
}

module.exports.updateUser = (data) => {
  const sql = `INSERT`
  console.log("Saved User")
}

module.exports.message = (data) => {
  console.log(data.email, data.name);
  const sql = `INSERT INTO messages (email, name, message) VALUES ('${data.email}', '${data.name}', '${data.message}')`;
  connect_db.query(sql, (err, result) => {
      if (err) throw err
      console.log("1 record inserted")
  })
}