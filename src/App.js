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
import Modal from "./modal";
window.$ = $;

class App extends Component {
  state = { showModal: false, modalData: {} };
  ctrlModal = (modalData, showModal = true) => {
    this.setState(() => {
      return modalData ? { showModal, modalData } : { showModal };
    });
  };
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio/showtime/" component={ShowTime} />
            <Route
              path="/portfolio"
              render={() => (
                <Portfolio
                  modalOpen={this.state.showModal}
                  ctrlModal={this.ctrlModal}
                />
              )}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/404" component={Page404} />
            <Redirect to="/404" />
          </Switch>
          {this.state.showModal ? (
            <Fragment>
              <Modal {...this.state.modalData} ctrlModal={this.ctrlModal} />
              <div className="modal-backdrop show" />
            </Fragment>
          ) : null}
        </Fragment>
      </Router>
    );
  }
}

export default App;
