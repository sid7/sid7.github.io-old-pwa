import React, { Component } from "react";
import { Link } from "react-router-dom";
import { I } from "../../tools/basic-comp";
import "./page-404.css";

export default class Page404 extends Component {
  render() {
    return (
      <div className="container-fluid sec sec-404">
        <div className="row">
          <div className="col-sm-12 offset-xl-3 col-xl-6">
            <div className="card animated pulse">
              <div className="card-header">404</div>
              <div className="card-body">Page Not Found</div>
              <div className="card-footer">
                <button
                  type="button"
                  className="btn btn-sec btn-lg w-100"
                  onClick={this.props.history.goBack}>
                  <I fa="undo fa-fw" /> Go to Previous Page
                </button>&nbsp;
                <Link to="/" className="btn btn-sec btn-lg w-100">
                  <I fa="home fa-fw" /> Go to Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
