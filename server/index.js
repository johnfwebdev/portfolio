require("dotenv").config({ path: "../.env" })
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require("cors")
const https = require('https')
const routes = require('./routes/routes')

const port = 5001

//Cors preflight to all routes
app.use(cors({ origin: 'http://localhost:8080' }))

//Body Parsers for requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use("/", routes)

server.listen(port, () => {
  console.log(`listening on port ${port}!`)
});