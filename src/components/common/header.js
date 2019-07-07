import React, { Component } from 'react';

export default class HeaderBlock extends Component {
  render() {
    return ( 
      <div className="grid">
        <div className="expanding_nav">
          <img className="menu_icon center" src="./assets/img/menu.png" alt="Open Menu"></img>
          <ul className="nav">
            <li className="menu_item">
              <a href="#">Home</a>
            </li>
            <li className="menu_item">
              <a href="#about-me">About Me</a>
            </li>
            <li className="menu_item">
              <a href="#contact-me">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}