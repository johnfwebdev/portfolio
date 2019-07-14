import React, { Component } from 'react';

const navItems = [
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
];

export default class HeaderBlock extends Component { 
  render() {
    return ( 
      <div className="grid">
        <div className="expanding_nav">
          <img className="menu_icon center" src="./assets/img/menu.png" alt="Open Menu"></img>
          <ul className="nav">
            {navItems.map((navListItem, index) => {
              return (
                <li
                  className="menu_item"
                  title={navListItem.name}
                  key={index}
                >
                  <a
                    onClick={() => {this.props.setContentBlock(navListItem.value)}}
                    href={navListItem.link}
                    alt={navListItem.alt}
                  >
                    {navListItem.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
  }
}