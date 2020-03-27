const express = require('express')
const router = express.Router()
const contactForm = require('./contactForm/contactForm')
const createUser = require('./createUser/createUser')
const checkUserPassword = require('../lib/checkUserPassword')
const session = require('express-session')
const bcrypt = require('bcrypt')

router.post("/session", (req, res) => {
  if (!req.session.userEmail || !req.sessionID) {
    console.log("No session, created session " + req.sessionID)
    res.status(201)
    res.json({
      sessionID: req.sessionID,
      sessionActive: true
    })
  }

  if (req.sessionID && req.session.userEmail) {
    res.status(200)
    console.log("Session found and userEmail Present " + req.sessionID)
    res.json({
      sessionID: req.sessionID,
      sessionActive: true,
      loggedIn: true
    })
  }
})

//Log In Route
router.post("/login", (req, res) => {
  const saltRounds = 10

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
  //Destroy session
  req.session.destroy(() => {
    res.json({ "Logged Out": true })
  })
})

//Create User
router.post("/create-user", (req, res) => {
  createUser.saveUser(req.body.userName, req.body.userEmail, req.body.userPassword)
  res.json({ 
    user_created: true,
    loggedIn: true,
    userEmail: req.session.userEmail
  })
})

//Contact Form
router.post("/contact_form", (req, res) => {
  if (!req.session.userEmail || !req.session.sessionID) {
    req.session.userEmail = req.body.userEmail
    req.session.sessionID = req.body.session
  }
  res.header("Access-Control-Allow-Origin", "http://localhost:8080")
  res.send(contactForm.form(req.body))
})

//Allows refresh for the React App for react-router without resulting in a
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

module.exports = router