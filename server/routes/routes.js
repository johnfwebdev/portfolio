const express = require('express')
const router = express.Router()
const contactForm = require('./contactForm/contactForm')
const createUser = require('./createUser/createUser')
const checkUserPassword = require('../lib/checkUserPassword')
const bcrypt = require('bcrypt')

router.post("/session", (req, res) => {
  console.log(req.session.cookie)
  console.log(req.sessionID)
  console.log(req.body.userName)
  console.log(req.body.loggedIn)
  if (err) {
    console.error(err);
    res.status(500).json({
      error: 'Internal error please try again'
    })
  }

  if (req.session.username) {
    res.status(200)
  }

  if (!req.session.username) {
    req.session.username = 'tobi'
    console.log(req.session.username)
  }

  res.json({
      loggedIn: true,
      user: req.session.username,
      sessionID: req.sessionID
  })
})

//Log In Route
router.post("/login", (req, res) => {
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
// router.get("*", (req, res) => {
//   res.send("/index.html")
// })

module.exports = router