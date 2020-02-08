import React, { Component } from "react"
import Navigation from "../navigation/navigation"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "../header/header"
import Section from "../section/section"
import Footer from "../footer/footer"
import LoginModal from "../loginModal/loginModal"
import regeneratorRuntime from "regenerator-runtime"

const initialState = {
  loggedIn: false,
  userEmail: null,
  userPassword: null,
  userName: null,
  registerUserForm: false,
  sessionActive: false,
  sessionID: null,
  fullPageLoad: null
}

export default class BasePage extends Component {
  constructor() {
    super()

    this.checkSession = this.checkSession.bind(this)
  }

  componentDidMount() {
    this.checkSession()
    console.log("lifecycle " + this.state.loggedIn)
  }

  state = initialState

  LoginName = (event) => {
    this.setState({ userName: event })
  }

  LoginEmail = (event) => {
    this.setState({ userEmail: event })
  }

  LoginPassword = (event) => {
    this.setState({ userPassword: event })
  }

  async checkSession() {
    fetch("/api/session", {
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
      .then(data => {
        console.log("logged in? " + data.loggedIn)

        this.setState(() => ({
          sessionActive: data.sessionActive,
          sessionID: data.sessionID
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