import React, { PureComponent } from "react";

const $ = q => document.querySelector(q);
const $$ = q => [].slice.call(document.querySelectorAll(q));

export default class SpyNav extends PureComponent {
  static defaultProps = {
    NavClass: "site-nav",
    activeClass: "active"
  };

  tick = false;

  scroll() {
  }
  handleClick = e => {
    e.preventDefault();
    const el = $(e.currentTarget.getAttribute("href"));
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  componentDidMount() {
    $$(`.${this.props.NavClass} a`).forEach(link => {
      link.addEventListener("click", this.handleClick);
    });
    window.addEventListener("scroll", this.scroll);
  }
  componentWillUnmount() {
    $$(`.${this.props.NavClass} a`).forEach(link => {
      link.removeEventListener("click", this.handleClick);
    });
    window.removeEventListener("scroll", this.scroll);
  }
  render() {
    return <nav className={this.props.NavClass}>{this.props.children}</nav>;
  }
}
