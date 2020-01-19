import React, { Component } from 'react'
import Navigation from '../navigation/navigation'
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../header/header'
import Section from '../section/section'
import Footer from '../footer/footer'
import LoginModal from '../loginModal/loginModal'

const initialState = {
  loggedIn: false,
  userEmail: null,
  userPassword: null,
  userName: null,
  registerUserForm: false
}

export default class BasePage extends Component {
  state = initialState

  LoginName = (event) => {
    this.setState({userName: event})
  }

  LoginEmail = (event) => {
    this.setState({userEmail: event})
  }

  LoginPassword = (event) => {
    this.setState({userPassword: event})
  }

  LogIn = (e) => {
    e.preventDefault()
    console.log(this.state.userPassword)
    fetch('http://localhost:5001/login', {
      method: 'POST',
      body: JSON.stringify({
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword
      }),
      headers: {
        "content-type": "application/json",
        "credentials": "include"
      }
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.status, "here")
          this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
          }))
        } else {
          console.log('nope')
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
    if (this.state.registerUserForm) {
      fetch('http://localhost:5001/create-user', {
        method: 'POST',
        body: JSON.stringify({
          userName: this.state.userName,
          userEmail: this.state.userEmail,
          userPassword: this.state.userPassword
        }),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .catch(error => console.error(error))

      this.setState(prevState => ({
        loggedIn: !prevState.loggedIn
      }))
    }
  }

  logoutCurrentUser = (e) => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn,
      registerUserForm: !prevState.registerUserForm
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
            /> : ''}
        <Router>
          <Navigation
            loggedIn={this.state.loggedIn}
            logoutUser={this.logoutCurrentUser}
            LogIn={this.LogIn}
          />
          <div className="main">
            <Header />
            {this.state.loggedIn ? <Section /> : ''}
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}