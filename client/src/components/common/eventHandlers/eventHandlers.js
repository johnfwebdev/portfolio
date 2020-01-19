import React from 'react'

export default class Handlers {
  constructor(values) {
    this.values = values
  }
  
  static LogIn = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }
}