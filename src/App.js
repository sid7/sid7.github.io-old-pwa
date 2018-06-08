import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery/dist/jquery.slim";
import "bootstrap";
import "./App.css";
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
