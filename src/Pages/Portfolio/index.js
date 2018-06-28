import React, { Component } from "react";
import { SecHeader } from "../../tools/basic-comp";
import Card from "./card";
import myPortfolio from "./my-portfolio";
import "./portfolio.css";

window.myPortfolio = myPortfolio;

export default class Portfolio extends Component {
  shadowLoading = true;
  fetched = {};
  state = { data: myPortfolio.getAll() };
  fetchMyCodepenData() {
    if (this.fetched.codepen) {
      return this.fetched.codepen;
    }
    let p = 1,
      _data = {};
    async function _fetch(page, callback) {
      const res = await fetch(
        `https://cpv2api.com/pens/public/sid7?page=${page}`
      );
      const { data } = await res.json();
      if (data) {
        data.forEach(d => {
          _data[d.id] = {
            loves: parseInt(d.loves, 10),
            views: parseInt(d.views, 10)
          };
        });
        p++;
        return _fetch(p, callback);
      }
      callback();
    }
    _fetch(p, () => {
      this.setState(({ data }) => {
        data.forEach(d => {
          d.loves = _data[d.id].loves;
          d.views = _data[d.id].views;
          d.comments = _data[d.id].comments;
        });
        this.fetched.codepen = data;
        return { data };
      });
    });
  }
  componentDidMount() {
    const $ = window.$;
    $(".portfolio-card .img-container").on("mousemove", function(e) {
      let origin =
        ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
        "% " +
        ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
        "%";
      $(this)
        .find("img")
        .css({ "transform-origin": origin });
    });
    this.fetchMyCodepenData();
    $(".sec--content").animateCss("slideInUp");
  }
  render() {
    return (
      <div className="container-fluid sec sec-portfolio">
        <SecHeader href="/portfolio">My Portfolio</SecHeader>
        <div className="row sec--content">
          {this.state.data.map((a, i) => (
            <Card {...this.props} key={`card-${i}`} {...a} />
          ))}
        </div>
      </div>
    );
  }
}
