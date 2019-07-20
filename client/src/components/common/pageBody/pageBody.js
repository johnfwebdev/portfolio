import React, { Component } from 'react'
import Navigation from '../navigation/navigation'
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../header/header'
import Section from '../section/section'
import Footer from '../footer/footer'

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
        <Router>
          <Navigation />
          <div className="main">
            <Header />
            <Section />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}