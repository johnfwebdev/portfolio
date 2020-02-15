import React, { Component } from "react"
import Navigation from "../navigation/navigation"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "../header/header"
import Section from "../section/section"
import Footer from "../footer/footer"
import LoginModal from "../loginModal/loginModal"
// import regeneratorRuntime from "regenerator-runtime"

const initialState = {
  loggedIn: false,
  userEmail: null,
  userPassword: null,
  userName: null,
  registerUserForm: false,
  sessionActive: false,
  sessionID: null,
  fullPageLoad: false
}

export default class BasePage extends Component {
  constructor() {
    super()

    this.checkSession = this.checkSession.bind(this)
  }

  state = initialState

  componentDidMount() {
    
    this.checkSession()
    
  }


  LoginName = (event) => {
    this.setState({ userName: event })
  }

  LoginEmail = (event) => {
    this.setState({ userEmail: event })
  }

  LoginPassword = (event) => {
    this.setState({ userPassword: event })
  }

  checkSession() {
    //POST to session backend
    fetch("/api/session", {
      method: "POST",
      body: JSON.stringify({
        userEmail: this.state.userEmail,  //Email and session id provided if available.
        sessionID: this.state.sessionID   //Used to determine if a new session or existing
      }),                                 // session will be used/needed
      headers: {
        "Content-Type": "application/json",
        "credentials": "include",
        "accepts": "application/json"
      }
    })
      .then(response => response.json()) //Parse JSON
      .then(data => {
        //Set state for session data
        //Set state for page loading indicator
        this.setState(() => ({
          sessionActive: data.sessionActive,
          sessionID: data.sessionID,
          fullPageLoad: true
        }))

        if (data.loggedIn === true) {
          console.log(data.loggedIn)
          this.setState(() => ({
            sessionActive: data.sessionActive,
            sessionID: data.sessionID,
            loggedIn: data.loggedIn
          }))
        }

        console.log("logged in now? " + data.loggedIn)
      })
  }

  LogIn = (e) => {
    e.preventDefault()
    console.log(this.state.userPassword)
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword
      }),
      headers: {
        "Content-Type": "application/json",
        "credentials": "include",
      }
    })
      // .then(res => res.json())
      .then((response) => {
        if (response.status === 200) {
          console.log(response.status, "here")
          this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
          }))
        } else {
          console.log("nope")
        }
      })
      .catch(error => console.error(error))
  }

  RegisterUserFormToggle = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      registerUserForm: !prevState.registerUserForm
    }))
  }

  CreateUser = (e) => {
    e.preventDefault()
    if (this.state.registerUserForm) {
      fetch("/api/create-user", {
        method: "POST",
        body: JSON.stringify({
          userEmail: this.state.userEmail,
          userPassword: this.state.userPassword
        }),
        headers: {
          "Content-Type": "application/json",
          "credentials": "include"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.loggedIn)
          if (data.loggedIn === true) {
            this.setState(() => ({
              loggedIn: data.loggedIn,
              userEmail: data.userEmail
            }))
          }
        })
      this.checkSession()
    }
  }

  logoutCurrentUser = (e) => {
    fetch("/api/logout", {
      method: "POST",
      body: JSON.stringify({
        loggedIn: this.state.loggedIn,
        userEmail: this.state.userEmail,
        sessionID: this.state.sessionID
      }),
      headers: {
        "Content-Type": "application/json",
        "credentials": "include",
        "accepts": "application/json"
      }
    })
      .then(response => response.json())
        this.setState(prevState => ({
          loggedIn: !prevState.loggedIn,
          registerUserForm: false
      }))
  }

  render() {
    if (this.state.fullPageLoad === false) {
      return(
        <div>Loading ...</div>
      )
    } else {
      return (
        <div className="grid">
          {!this.state.loggedIn ?
            <LoginModal
              UserName={this.LoginName}
              UserEmail={this.LoginEmail}
              UserPassword={this.LoginPassword}
              LogIn={this.LogIn}
              RegisterUser={this.CreateUser}
              ToggleRegister={this.RegisterUserFormToggle}
              LoggedIn={this.state.loggedIn}
              RegisterUserForm={this.state.registerUserForm}
            /> : ""}
          <Router>
            <Navigation
              loggedIn={this.state.loggedIn}
              logoutUser={this.logoutCurrentUser}
              LogIn={this.LogIn}
            />
            <div className="main">
              <Header />
              {this.state.loggedIn ? <Section /> : ""}
              <Footer />
            </div>
          </Router>
        </div>
      )
    }
  }
}