import React, { Component } from "react";
import { Link } from "react-router-dom";
import { I } from "../../tools/basic-comp";
import "./home.css";

const links = [
  { to: "/about", text: "About Me" },
  { to: "/portfolio", text: "My Portfolio" },
  { to: "/contact", text: "Contact Me" }
];
const socialLinks = [
  { fa: "codepen", title: "Codepen", to: "https://codepen.io/sid7/" },
  { fa: "github", title: "GitHub", to: "https://github.com/sid7" },
  {
    fa: "free-code-camp",
    title: "Free Code Camp",
    to: "https://www.freecodecamp.org/portfolio/sid7"
  },
  {
    faPre: "far",
    fa: "envelope",
    title: "E-mail",
    to: "mailto:suyashsidzzz@gmail.com"
  }
];

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
          {links.map(({ to, text }, i) => (
            <div className="col" key={`link-${to.substr(1)}-${i}`}>
              <Link
                to={to}
                className={`btn sec-link sec-for-${to.substr(1)} btn-block`}>
                {text}
              </Link>
            </div>
          ))}
          <div className="col-12 sec--social-links">
            {socialLinks.map(({ faPre = "fab", title, fa, to }, i) => (
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
