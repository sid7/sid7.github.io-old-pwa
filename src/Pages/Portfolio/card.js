import React, { PureComponent, Fragment } from "react";
import { I } from "../../tools/basic-comp";

const CardLink = ({ href, target = "_blank", children }) => (
  <a
    rel="noreferrer noopener"
    className="btn btn-sec"
    href={href}
    target={target}>
    {children}
  </a>
);
const ItemCodepen = ({ loves, views }) => (
  <Fragment>
    {loves ? (
      <span title="Loves" className="ml-auto">
        <I prefex="far" fa="heart" /> {loves}
      </span>
    ) : null}
    {views ? (
      <span title="Views" className={!loves ? "ml-auto" : undefined}>
        <i className="far fa-eye" /> {views}
      </span>
    ) : null}
  </Fragment>
);
const TopBar = ({ parts: { fcc, host }, ...props }) => (
  <div className="top-bar">
    {fcc ? (
      <span title="Free Code Camp">
        <I prefex="fab" fa="free-code-camp fa-lg" />
      </span>
    ) : null}
    <span title={host}>
      <I prefex="fab" fa={`${host} fa-lg`} />
    </span>
    {host === "codepen" ? <ItemCodepen {...props} /> : null}
  </div>
);

class PureCard extends PureComponent {
  imgLoaded({ target }) {
    window
      .$(target)
      .parents(".portfolio-card")
      .removeClass("img-loading");
  }
  imgFailLoad({ target }) {
    window
      .$(target)
      .parents(".portfolio-card")
      .removeClass("img-loading")
      .addClass("img-fail-load");
  }
  render() {
    const {
      id,
      imgs,
      links: { view, code },
      name,
      type
    } = this.props;
    return (
      <div id={id} className="col-lg-4">
        <div className="portfolio-card img-loading" tabIndex={0}>
          <div className="img-container">
            <TopBar {...this.props} />
            <img
              src={imgs.lg}
              onLoad={this.imgLoaded}
              onError={this.imgFailLoad}
              alt={`Screenshot of ${name}`}
              className="img-fluid"
            />
            <div className="card-text">
              <span className="text--title">{name}</span>
              <span className="text--info">{type}</span>
            </div>
          </div>
          <div className="card-actions d-flex">
            <CardLink href={code}>Code</CardLink>
            <CardLink href={view}>View</CardLink>
            <button type="button" className="btn btn-sec ml-auto">
              Info
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function imgLoad({ target }) {
  window
    .$(target)
    .parents(".portfolio-card")
    .removeClass("img-loading");
}
function imgFailLoad({ target }) {
  window
    .$(target)
    .parents(".portfolio-card")
    .removeClass("img-loading")
    .addClass("img-fail-load");
}

const Card = ({ id, links, imgs, name, type, ctrlModal, ...props }) => (
  <div id={id} className="col-lg-4">
    <div className="portfolio-card img-loading" tabIndex={0}>
      <div className="img-container">
        <TopBar {...props} />
        <img
          src={imgs.lg}
          onLoad={imgLoad}
          onError={imgFailLoad}
          alt={`Screenshot of ${name}`}
          className="img-fluid"
        />
        <div className="card-text">
          <span className="text--title">{name}</span>
          <span className="text--info">{type}</span>
        </div>
      </div>
      <div className="card-actions d-flex">
        <CardLink href={links.code}>Code</CardLink>
        <CardLink href={links.view}>View</CardLink>
        <button
          type="button"
          onClick={() => {
            ctrlModal({ id, name, links, imgs, type, ...props });
          }}
          className="btn btn-sec ml-auto">
          Info
        </button>
      </div>
    </div>
  </div>
);

export default Card;
export { PureCard };
