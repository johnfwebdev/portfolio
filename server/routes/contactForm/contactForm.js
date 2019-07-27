const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("../../mysql_connect")

module.exports.form = (data) => {

  db.connection(data)

  return JSON.stringify(data)
}