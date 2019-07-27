require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const contactForm = require('./routes/contactForm/contactForm')

const port = 5001;

const allowedOrigins = ['http://localhost:8080', 'http://porfotio.test'];

//Allows refresh for the React App for react-router without resulting in a 404 when not on the index path
app.get("/*", (req, res) => res.send("/index.html"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
      origin: allowedOrigins
    },
    (origin, callback) => {
    //allow requests with no origin 
    //(like mobile apps or curl requests)
    if(!origin) {
      return callback(null, true)
    }
    if(allowedOrigins.indexOf(origin) === -1) {
      let msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  })
);
app.get("/", (req, res) => res.send("Hello World!"))


//Contact Form
app.post("/contact-form", (req, res) => {
  //console.log(req.headers)
  console.log(req.body)
  res.send(contactForm.form(req.body));
});


app.listen(port, () => {
  console.log(`listening on port ${port}!`)
});