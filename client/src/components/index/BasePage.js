import React, { Component } from 'react';
import HeaderBlock from '../common/header';
import LogoItem from '../common/logo';

export default class BasePage extends Component {
  render() {
    return (
      <div className="grid">
        <HeaderBlock />
        <div className="main">
          <header className="header row">
            <p>Suh Dude!
              <span>@JohnFasano</span>
            </p>
          </header>
          <section className="content row">
            <LogoItem />
          </section>
        </div>
      </div>
    )
  }
}