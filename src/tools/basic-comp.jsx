import React from "react";
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

export { I, Btn };
