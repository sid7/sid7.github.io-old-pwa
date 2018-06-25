import React, { Component } from "react";
import { SecHeader } from "../../tools/basic-comp";
import Card from "./card";
import myPortfolio from "./my-portfolio";
import "./portfolio.css";

window.myPortfolio = myPortfolio;

export default class Portfolio extends Component {
  shadowLoading = true;
  state = { data: myPortfolio.getAll() };
  fetchMyCodepenData() {
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
        });
        return { data };
      });
    });
  }
  componentDidMount() {
    const $ = window.$;
    $(".portfolio-card").animateCss("fadeIn");
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
  }
  render() {
    return (
      <div className="container-fluid sec sec-portfolio">
        <SecHeader href="/portfolio">My Portfolio</SecHeader>
        <div className="row sec--content">
          {this.state.data.map((a, i) => <Card key={`card-${i}`} {...a} />)}
        </div>
      </div>
    );
  }
}
