const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const db = require("../lib/mysql_connect")
const bcrypt = require('bcrypt')

module.exports.comparePasswordTokens = (email, userToken) => {
  bcrypt.compare(userToken, db.getUserPassword(email), (err, res) => {
    if (err) {
      return false
    }
    return true
  })
  console.log("Password Checked")
  
  return true;
}