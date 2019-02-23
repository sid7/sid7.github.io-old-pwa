import React from "react";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { A } from "../utils/comps";

const label = (d, n) => {
  console.log(d.name, n);
  return `open ${d.name} ` + d.host === "github" ? " repo" : n;
};

const MyProjects = ({ lst, pl }) => (
  <section id="projects" className="sec sec-projects">
    <h2 className="sec-heading">My Projects</h2>
    <div className="card-pad">
      {lst.map((p, i) => (
        <div className="card" key={i} tabIndex={0}>
          <div className="card-body img-container">
            <img src={p.img} alt={`Screenshot of ${p.name}`} />
            <h3>{p.name}</h3>
          </div>
          <div className="card-footer">
            {Object.entries(p.links).map(([n, l], j) => (
              <A
                className="link-btn btn-outline"
                href={l}
                key={j}
                aria-label={label(p, n)}
              >
                <I icon={["fab", p.host]} fixedWidth /> {n}
              </A>
            ))}
          </div>
        </div>
      ))}
      <div className="block">
        <h3>Check more on</h3>
        <div className="flx">
          {Object.entries(pl).map(([n, p], i) => (
            <A className="link-btn lg" href={p.url} key={i}>
              <I icon={["fab", p.icon]} /> {n}
            </A>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MyProjects;
