import React, { Component } from 'react';

export default class LogoItem extends Component {
  render() {
    return (
      <a href="/">
        <img className="logo" src="./assets/img/logo.png"></img>
      </a>
    )
  }
}