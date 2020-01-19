import React, { Component } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Navigation extends Component {
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
            {this.props.loggedIn && 
              <li className="menu_item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            }
            {this.props.loggedIn &&
              <li className="menu_item">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
            }
            {this.props.loggedIn &&
              <li className="menu_item">
              <a className="nav-link" onClick={this.props.logoutUser}>
                  Log Out
              </a>
              </li>
            }
          </ul>
        </div>
      </div>
    );
  }
}
