import React, { Component } from "react";
import ProjectItem from './projectItem/projectItem'

export default class Projects extends Component {
  render() {
    return (
      <article className="section row">
        <p>
          <ProjectItem />
        </p>
      </article>
    );
  }
}
