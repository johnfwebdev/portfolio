const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const db = require("../lib/mysql_connect")
const bcrypt = require('bcrypt')

module.exports.comparePasswordTokens = (email, userToken) => {
  return db.getUserPassword(email, userToken)
}