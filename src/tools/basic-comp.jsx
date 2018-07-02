import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const I = ({ prefex = "fa", fa, ...props }) => (
  <i className={`${prefex} fa-${fa}`} {...props} />
);
I.propTypes = {
  prefex: PropTypes.string,
  fa: PropTypes.string.isRequired
};

const Btn = ({ type = "button", btn, children, ...props }) => (
  <button type={type} className={`btn ${btn}`} {...props}>
    {children}
  </button>
);
Btn.propTypes = {
  type: PropTypes.string,
  btn: PropTypes.string,
  children: PropTypes.node
};
const ExtLinkBtn = ({ to, inNewTab = "_blank", className, children }) => (
  <a
    rel="noreferrer noopener"
    className={`btn btn-${className}`}
    href={to}
    target={inNewTab}>
    {children}
  </a>
);
ExtLinkBtn.propTypes = {
  to: PropTypes.string.isRequired,
  inNewTab: PropTypes.string,
  children: PropTypes.node
};

const SecHeader = ({ href, children }) => (
  <div className="row">
    <div className="col-12 flex-header">
      <Link to="/" className="back-link">
        &#171;
      </Link>
      <a href={href} className="base-link">
        {children}
      </a>
    </div>
  </div>
);
SecHeader.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

const Msg = ({ text }) => (
  <div className="col-12 text-center">
    <h1 className="msg-heading-text">{text}</h1>
  </div>
);
Msg.propTypes = {
  text: PropTypes.string.isRequired
};

const Loader = ({ icon = "cog fa-spin", text = "Loading.." }) => (
  <div className="col-12 loading">
    <I fa={icon} /> <h1>{text}</h1>
  </div>
);
Loader.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string
};

export { I, Btn, SecHeader, ExtLinkBtn, Msg, Loader };
