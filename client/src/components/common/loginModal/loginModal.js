import React, { Component, PropTypes } from 'react'

export default class LoginModal extends Component {

  HandleNameChange = (e) => {
    this.props.UserName(e.target.value)
  }

  HandleEmailChange = (e) => {
    this.props.UserEmail(e.target.value)
  }

  HandlePasswordChange = (e) => {
    this.props.UserPassword(e.target.value)
  }

  render() {
    return (
      <div className="login-modal">
        <div className="loginModal-conatiner">
          <div className="login-form">
            <form
              className="social-login-form"
              onSubmit={!this.props.RegisterUserForm ? this.props.LogIn : this.props.RegisterUser}
            >
              <h2>Log In</h2>
              {!this.props.RegisterUserForm ? '' :
                <input
                  className="form-field"
                  required
                  placeholder="Name"
                  autoComplete="name"
                  onChange={this.HandleNameChange}
                />}
              <input 
                className="form-field"
                required
                placeholder="E-mail"
                autoComplete="email"
                onChange={this.HandleEmailChange}
              />
              <input
                type="password"
                className="form-field"  
                required
                placeholder="Password"
                autoComplete={!this.props.RegisterUserForm ? "current-password" : "new-password"}
                onChange={this.HandlePasswordChange}
              />
              <input type="button" onClick={this.props.ToggleRegister} value={!this.props.RegisterUserForm ? "Get Registered" : "Go Back to Log In"} />
              <button type="submit">{!this.props.RegisterUserForm ? "Log In" : "Finish Registering"}</button>
            </form>
          </div>
          {/* <p> - or - </p> */}
        </div>
      </div>
    );
  }
}



