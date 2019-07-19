import React, { Component } from "react";
import About from '../about/about'

export default class Section extends Component {
  render() {

    const { block } = this.props

    if (block === 'base') {
      return (
        <p>
          This is the base content block.
        </p>
      );
    }
    if (block === 'projects') {
      return 'projects';
    }
    if (block === 'about') {
      return <About />;
    }
    if (block === 'contact') {
      return 'contact';
    }
  }
}
