import React from "react";
import { ExtLinkBtn } from "../tools/basic-comp";

const Header = ({ title: __html = "Suyash", hide }) => (
  <div className="modal-header">
    <h5 className="modal-title" dangerouslySetInnerHTML={{ __html }} />
    <button type="button" className="close" aria-label="Close" onClick={hide}>
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

const backImg = url =>
  `linear-gradient(rgba(255,255,255,.4),rgba(255,255,255,.4)),url(${url})`;
const Body = ({ name, imgs, links, type, light, ...rest }) => (
  <div className="modal-body" style={{ backgroundImage: backImg(imgs.lg) }}>
    <div className="container-fluid sec-portfolio">
      <div className="row p-4">
        <div className="col">
          <table className={`table table-bordered${light ? " light" : ""}`}>
            <tbody>
              <tr>
                <td>Title</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>About</td>
                <td>{type}</td>
              </tr>
              <tr>
                <td>links</td>
                <td>
                  <ExtLinkBtn className="sec btn-sm" to={links.code}>
                    Code
                  </ExtLinkBtn>{" "}
                  <ExtLinkBtn className="sec btn-sm" to={links.view}>
                    View
                  </ExtLinkBtn>
                </td>
              </tr>
              {["Loves", "Views", "Comments"].map(a => {
                return (
                  <tr key={`modal-content-${a}`}>
                    <td>{a}</td>
                    <td>{rest[a.toLowerCase()] || 0}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);
const Footer = ({ hide }) => (
  <div className="modal-footer">
    <button type="button" className="btn btn-outline-danger" onClick={hide}>
      Close
    </button>
  </div>
);

export { Header, Body, Footer };
