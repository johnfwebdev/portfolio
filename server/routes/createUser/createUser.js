const express = require("express");
const bodyParser = require("body-parser");
const app = express();

module.exports.user = () => {
  console.log("Internal Log")
  return "Done";
}