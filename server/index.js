require("dotenv").config({ path: "../.env" })
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require("cors")
const https = require('https')
const routes = require('./routes/routes')
const session = require('express-session')
const redis = require('redis')
const redisStore = require('connect-redis')(session)
const client = redis.createClient()

const port = (process.env.PORT || 5001)

//Cors preflight to all routes
app.options('*', cors({
  origin: 'http://localhost:8080',
  credentials: true
}))

//Body Parsers for requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
  name: 'session-id',
  secret: 'john',
  store: new redisStore({
    host: 'localhost',
    port: 6379,
    client: client,
    ttl: 60 * 2 * 1000
  }),
  duration: 1000,
  activeDuration: 1000,
  saveUninitialized: false,
  resave: false,
  cookie: {
    secure: true,
    maxAge: 60 * 2 * 1000
  }
}))

//Routes
app.use("/", routes)

server.listen(port, () => {
  console.log(`listening on port ${port}!`)
});