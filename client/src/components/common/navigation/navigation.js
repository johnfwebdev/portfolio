import React, { Component } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom";

/*const navItems = [
  {
    name: "Home",
    link: "#",
    alt: "Home",
    value: "base"
  },
  {
    name: "About Me",
    link: "#about-me",
    alt: "About Me",
    value: "about"
  },
  {
    name: "Contact Me",
    link: "#contact-me",
    alt: "Contact Me",
    value: "contact"
  },
  {
    name: "Projects",
    link: "#projects",
    alt: "Projects",
    value: "projects"
  }
];*/

export default class HeaderBlock extends Component {
  render() {
    return (
      <div className="grid">
        <div className="expanding_nav">
          <img
            className="menu_icon center"
            src="./assets/img/menu.png"
            alt="Open Menu"
          />
          <ul className="nav">
            <li className="menu_item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="menu_item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="menu_item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="menu_item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
