const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("../../lib/mysql_connect")

module.exports.form = (data) => {
  db.message(data)
  return JSON.stringify(data)
}