import React, { Component } from "react";
import { I, ExtLinkBtn, SecHeader } from "../../tools/basic-comp";
import { contactMe } from "../../tools/links-list";
import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="container-fluid sec sec-contact">
        <SecHeader href="/contact">Contact Me</SecHeader>
        <div className="row sec--content">
          <div className="col-12">
            <div className="row pb-4" style={{ borderBottom: "2px solid" }}>
              <div className="col-12 mt-4">
                <h4 className="display-4">Links -</h4>
              </div>
              {contactMe.profiles.map(({ to, fa, title }) => (
                <div key={`profile-link-${title}`} className="col mt-2">
                  <ExtLinkBtn className="sec btn-lg btn-block" to={to}>
                    <I prefex="fab" fa={`${fa} fa-fw`} /> {title}
                  </ExtLinkBtn>
                </div>
              ))}
            </div>
            <div className="row pb-4" style={{ borderBottom: "2px solid" }}>
              <div className="col-12 mt-4">
                <h4 className="display-4">Social Links -</h4>
              </div>
              {contactMe.social.map(({ url, fa, text }) => (
                <div key={`social-link-${text}`} className="col mt-2">
                  <ExtLinkBtn className="sec btn-lg btn-block" to={url}>
                    <I prefex="fab" fa={`${fa} fa-fw`} /> {text}
                  </ExtLinkBtn>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-12 mt-4">
                <h2 className="display-4">E-Mail -</h2>
              </div>
              <div className="col-12">
                <ExtLinkBtn className="sec" to="mailto:suyashsidzzz@gmail.com">
                  <I fa="envelope fa-fw" /> E-Mail
                </ExtLinkBtn>{" "}
                &nbsp;
                <p className="h3 text-muted d-inline font-weight-light">
                  suyashsidzzz@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
