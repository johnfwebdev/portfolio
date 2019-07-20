import React, { Component } from "react";
import LogoItem from "../logo/logo";

export default class Header extends Component {
  
  render() {
    return (
      <header className="header row">
        <LogoItem />
        <p>
          Suh Dude!
          <span>@JohnFasano</span>
        </p>
      </header>
    );
  }
}
