import React, { Component } from "react";
import { SecHeader, Msg } from "../../tools/basic-comp";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <div className="container-fluid sec sec-about">
        <SecHeader href="/about">About Me</SecHeader>
        <div className="row sec--content pt-4">
          <Msg text="Coming Soon.. " />
        </div>
      </div>
    );
  }
}
