import React, { Component } from "react";
import { Link } from "react-router-dom";
import { I } from "../../tools/basic-comp";
import { pages, social } from "../../tools/links-list";
import "./home.css";
export default class Home extends Component {
  render() {
    return (
      <div className="container sec sec-home">
        <div className="row sec--header">
          <div className="col-12">
            <a href="/" className="sec-link">
              Suyash
            </a>
          </div>
        </div>
        <div className="row sec--links">
          {pages.map(({ to, text }, i) => (
            <div className="col" key={`link-${to.substr(1)}-${i}`}>
              <Link
                to={to}
                className={`btn sec-link sec-for-${to.substr(1)} btn-block`}>
                {text}
              </Link>
            </div>
          ))}
          <div className="col-12 sec--social-links">
            {social.map(({ faPre = "fab", title, fa, to }, i) => (
              <a
                key={`social-link-${title}`}
                rel="noreferrer noopener"
                href={to}
                target="_blank">
                <I prefex={faPre} fa={`${fa} fa-3x px-1`} title={title} />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
