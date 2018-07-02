import React, { PureComponent } from "react";
import { Header, Body, Footer } from "./sub-comps";
import "./modal.css";

function hoverEffect(e) {
  const $ = window.$;
  let origin =
    ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
    "% " +
    ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
    "%";
  $(this).css({ "background-position": origin });
}

export default class Modal extends PureComponent {
  clickOnPage = ({ target }) => {
    if (!this.refs.modalContent.contains(target)) {
      this.props.ctrlModal(null, false);
    }
  };
  hide = () => {
    this.props.ctrlModal(null, false);
  };
  componentDidMount() {
    document.querySelector("body").classList.add("modal-open");
    document
      .querySelector(".modal")
      .addEventListener("click", this.clickOnPage);
    window.$(".modal-body").on("mousemove", hoverEffect);
  }
  componentWillUnmount() {
    document.querySelector("body").classList.remove("modal-open");
    document
      .querySelector(".modal")
      .removeEventListener("click", this.clickOnPage);
    window.$(".modal-body").off("mousemove", hoverEffect);
  }
  render() {
    return (
      <div
        className="modal fade show"
        tabIndex={-1}
        role="dialog"
        style={{ display: "block", paddingRight: "17px" }}>
        <div className="modal-dialog modal-lg" role="document">
          <div ref="modalContent" className="modal-content">
            <Header title={this.props.name} hide={this.hide} />
            <Body {...this.props} />
            <Footer hide={this.hide} />
          </div>
        </div>
      </div>
    );
  }
}
