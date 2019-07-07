import React, { Component } from 'react';

const navItems = [
  {
    name: 'Home',
    link: '#',
    alt: 'Home'
  },
  {
    name: 'About Me',
    link: '#about-me',
    alt: 'About Me'
  },
  {
    name: 'Contact Me',
    link: '#contact-me',
    alt: 'Contact Me'
  }
]

export default class HeaderBlock extends Component {
  buildNavList() {

  }
  render() {
    return ( 
      <div className="grid">
        <div className="expanding_nav">
          <img className="menu_icon center" src="./assets/img/menu.png" alt="Open Menu"></img>
          <ul className="nav">
            {navItems.map((navListItem, index) => {
              return (
                <li className="menu_item" title={navListItem.name} key={index}>
                  <a href={navListItem.link} alt={navListItem.alt}>{navListItem.name}</a>
                </li>)
            })}
          </ul>
        </div>
      </div>
    )
  }
}