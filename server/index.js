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
const { v4: genuuid } = require('uuid')

const port = (process.env.PORT || 5001)

//CORS preflight settings to all routes
app.options('*', cors({
  origin: 'http://localhost:8080',
  credentials: true
}))

//Parsers for requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.ENVIRONMENT === 'production') {
  app.set('trust proxy', 1)
}

app.use(session({
  genid: () => {
    return genuuid()
  },
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
  saveUninitialized: true,
  resave: false,
  cookie: {
    secure: false,
    maxAge: 60 * 5 * 1000 //5 minutes
  }
}))

app.use((req, res, next) => {
  if (!req.session.userEmail || !req.session.sessionID) {
    req.session.userEmail = req.body.userEmail
    req.session.sessionID = req.sessionID
    console.log("Set email and sessionID " + req.session.userEmail + ' ' + req.session.sessionID)
  }
  next()
})

//Routes
app.use("/", routes)

server.listen(port, () => {
  console.log(`listening on port ${port}!`)
});