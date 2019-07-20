import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from '../../pages/indexPage/indexPage'
import About from '../../pages/aboutPage/aboutPage'
import Contact from '../../pages/contactPage/contactPage'
import Projects from '../../pages/projectsPage/projectsPage.js'

export default class Section extends Component {
  render() {
    return (
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      /*<section className="section row">
        Section
      </section>*/
    );
    /*const { block } = this.props;

    if (block === "base") {
      return <p>This is the base content block.</p>;
    }
    if (block === "projects") {
      return "projects";
    }
    if (block === "about") {
      return <About />;
    }
    if (block === "contact") {
      return "contact";
    }
    <section className="content row">
    <Section block={this.state.currentBlock} />
    </section>;*/
           }
}


