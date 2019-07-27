import React, { Component } from "react";
import ContactForm from '../../common/forms/contactForm/contactForm'

export default class Contact extends Component {
  render() {
    return (
      <article className="section row">
        <h2>Contact Me</h2>
        <ContactForm />
      </article>
    );
  }
}
