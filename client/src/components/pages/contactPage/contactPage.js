import React, { Component } from "react"

export default class BasePage extends Component {

  handleChange(e) {
    this.setState({

    })
  }

  render() {
    return (
      <form>
        <div>
          <label>Name </label>
          <input type="text" onChange={this.handleChange} />
        </div>
        <div>
          <label>Email </label>
          <input type="email" onChange={this.handleChange} />
        </div>
        <div>
          <label>Message </label>
          <textarea type="text" onChange={this.handleChange} />
        </div>
        <input type="submit" />
      </form>
    );
  }
}
