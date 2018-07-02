import React, { Component } from "react";
import { I } from "../../tools/basic-comp";
import { Link } from "react-router-dom";
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
            views: parseInt(d.views, 10),
            comments: parseInt(d.comments, 10)
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
        <div className="row">
          <div className="col-12 flex-header">
            <Link to="/" className="back-link">
              &#171;
            </Link>
            <a href="/portfolio" className="base-link">
              My Portfolio
            </a>
            <Link to="/portfolio/showtime" className="btn btn-sec ml-auto">
              <I fa="tv" /> Slide Show
            </Link>
          </div>
        </div>
        <div className="row sec--content">
          {this.state.data.map((a, i) => (
            <Card {...this.props} key={`card-${i}`} {...a} />
          ))}
        </div>
      </div>
    );
  }
}
