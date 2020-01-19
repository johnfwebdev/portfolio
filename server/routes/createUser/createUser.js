const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require('bcrypt')
const db = require("../../lib/mysql_connect")


module.exports.saveUser = (name, email, password) => {
  const saltRounds = 10
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err)
    }
    try {
      db.saveUser(name, email, hash)
    }
    catch (e){
      throw console.log(e)
    }
    console.log(`Password Token Created: ${hash}`)
  })
  console.log("User Created")
  return "Done";
}