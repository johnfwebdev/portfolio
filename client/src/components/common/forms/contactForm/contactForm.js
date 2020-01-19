import React, { Component } from "react";
import validation from "../formValidate/formValidate"

const initialState = {
  email: '',
  name: '',
  message: '',
  emailValid: false,
  nameValid: false,
  messageValid: false
}

export default class ContactForm extends Component {
  state = initialState

  handleFormSubmit = (event) => {
    event.preventDefault();
    
    fetch("http://localhost:5001/contact_form", {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        message: this.state.message
      }),
      headers: { 
        "content-type": "application/json"
      }
    })
      .finally(() => {
        console.log('Form Data Sent')
        this.setState(initialState);
      })
      .catch(error => console.error(error))
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value })
    if (validation.nameValidate(event.target.value, "string")) {
      this.setState({ nameValid: true })
    }
    if (!validation.nameValidate(event.target.value, "string")) {
      this.setState({ nameValid: false })
    }
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handleChangeMessage = (event) => {
    this.setState({ message: event.target.value })
    if (validation.messageValidate(event.target.value, "string")) {
      this.setState({ messageValid: true })
    }
    if (!validation.messageValidate(event.target.value, "string")) {
      this.setState({ messageValid: false });
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleFormSubmit}
        className="contact-form"
      >
        <div className="form-item">
          <label>Email </label>
          <input
            type="email"
            id="email"
            required
            placeholder="placeholder@placeholder.com"
            className={this.state.emailValid ? "form-field valid" : "form-field invalid"}
            value={this.state.email}
            onChange={this.handleChangeEmail}
            autoComplete="off"
          />
        </div>
        <div className="form-item">
          <label>Name </label>
          <input
            type="text"
            id="name"
            required
            placeholder="First Last"
            className={this.state.nameValid ? "form-field valid": "form-field invalid"}
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </div>
        <div className="form-item">
          <label>Message </label>
          <textarea
            id="message"
            required
            rows="3"
            wrap="soft"
            placeholder="Message Here"
            className={this.state.messageValid ? "message form-field valid" : "message form-field invalid"}
            value={this.state.message}
            onChange={this.handleChangeMessage}
          />
        </div>
        <input type="submit" value="Submit" />
        <div>
          {this.state.mailSent && <div>Thank you for contcting us.</div>}
        </div>
      </form>
    );
  }
}