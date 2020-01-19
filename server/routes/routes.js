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
    ttl: 60*60 
  }),
  duration: 1000,
  activeDuration: 1000,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 60
  }
}))

router.all("*", (req, res, next) => {
  if (!req.session) {
    res.redirect('/')
    console.log("Route:: router.all (35)", "Session False")
  }
  console.log("Route:: router.all (37)", "Done")
  next()
})

//Log In Route
router.post("/login", async (req, res) => {
  const saltRounds = 10

  console.log(typeof req.body.userPassword, typeof req.body.userEmail)

  const checkPassword = () => {
    return new Promise((resolve, reject) => {
      let item = checkUserPassword.comparePasswordTokens(req.body.userEmail, req.body.userPassword)
      resolve(item)
    })
  }

  checkPassword()
    .then((result) => {
      console.log(result, "53")
      if (result) {
        // req.session.key = bcrypt.hash(JSON.stringify(req.body.userEmail), saltRounds, (err, hash) => {
        //   if (err) {
        //     console.log("Route:: router.post(/login) (48)", err)
        //   }
        //   console.log("Route:: router.post(/login) (50)", hash)
        // })
        req.session.save
        res.sendStatus(200)
      } else {
        res.sendStatus(403)
      }
    })
    .catch((reject) => {
      console.log("Route:: router.post(/login) (54) Failed DB PW Grab", reject)
    })
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
    res.json({ user_created: true })
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