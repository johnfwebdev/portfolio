const express = require('express')
const router = express.Router()
const contactForm = require('./contactForm/contactForm')
const createUser = require('./createUser/createUser')
const checkUserPassword = require('../lib/checkUserPassword')
const session = require('express-session')
const redis = require('redis')
const redisStore = require('connect-redis')(session)
const client = redis.createClient()
const bcrypt = require('bcrypt')

router.use(session({
  name: 'session-id',
  secret: 'john',
  resave: false,
  store: new redisStore({ 
    host: 'localhost', 
    port: 6379, 
    client: client, 
    ttl: 60*60*1 
  }),
  duration: 1000,
  activeDuration: 1000,
  saveUninitialized: false,
  cookie: {
    maxAge: 60
  }
}))

router.all("*", (req, res, next) => {
  if (!req.session) {
    res.redirect('/')
  }
  console.log('All route hit')
  next()
})

//Log In Route
router.post("/login", (req, res) => {
  //console.log(req.body.userEmail)
  const saltRounds = 10
  if (checkUserPassword.comparePasswordTokens(req.body.userEmail, req.body.userPassword)) {
    req.session.key = bcrypt.hash(req.body.userEmail, saltRounds, (err, hash) => {
      if (err) {
        console.log(err)
      }
      console.log(hash)
    })
    res.sendStatus(200)
    return true
  }
  res.sendStatus(403)
  console.log(req.session)
})

//Log Out Route
router.post("/logout", (req, res) => {
  res.send(JSON.stringify({ "Logged Out": true }))
})

//Create User
router.post("/create-user", (req, res) => {
  console.log(req.body)
  try {
    createUser.saveUser(req.body.userName, req.body.userEmail, req.body.userPassword)
    res.send(JSON.stringify({ user_created: true }))
  }
  catch (err) {
    throw err
  }
});

//Contact Form
router.post("/contact_form", (req, res) => {
  // console.log(req.headers)
  // console.log(req.body)
  console.log("Form Entry")
  res.header("Access-Control-Allow-Origin", "http://localhost:8080")
  res.send(contactForm.form(req.body))
});

//Allows refresh for the React App for react-router without resulting in a
router.get("/*", (req, res) => {
  res.send("/index.html")
})

module.exports = router