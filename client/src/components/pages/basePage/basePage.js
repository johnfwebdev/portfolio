import React, { Component } from 'react'
import HeaderBlock from '../../common/header/header'
import LogoItem from '../../common/logo/logo'
import Section from '../../common/sections/section'

export default class BasePage extends Component {

  state = {
    currentBlock: 'base'
  }

  setContentBlock = (view) => {
    this.setState((state) => ({
      currentBlock: view
    }))
  }

  render() {
    return (
      <div className="grid">
        <HeaderBlock setContentBlock={this.setContentBlock}/>
        <div className="main">
          <header className="header row">
            <p>Suh Dude!
              <span>@JohnFasano</span>
            </p>
          </header>
          <section className="content row">
            <LogoItem />
            <Section block={this.state.currentBlock}/>
          </section>
        </div>
      </div>
    )
  }
}