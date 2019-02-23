import React from "react";
import { skills } from "../data/lst";

const h = (a, b) => (
  <li className="animated heartBeat" key={b}>
    {a}
  </li>
);

const Skills = () => (
  <section id="skills" className="sec sec-skills">
    <h2 className="sec-heading">Skills</h2>
    <ul className="flx">{skills.map(h)}</ul>
  </section>
);

export default Skills;
