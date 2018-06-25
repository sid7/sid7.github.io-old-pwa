import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";
import $ from "./tools/custom-jquery";
import "bootstrap";
import { Home, About, ShowTime, Portfolio, Contact, Page404 } from "./Pages";
window.$ = $;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/portfolio/view/:id" component={Portfolio} /> */}
            <Route path="/portfolio/slideShow/" component={ShowTime} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/404" component={Page404} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
