import React from "react";
import { about } from "../data/lst";
import { Lst, A } from "../utils/comps";

const About = () => (
  <section id="about" className="sec sec-about">
    <h2 className="sec-heading">About Me</h2>
    <div className="flx">
      <div className="col-7">
        <p>
          I am Suyash Bhutani from{" "}
          <A
            className="link"
            href="https://goo.gl/maps/HvY74XbQmoD2"
            aria-label="google map"
          >
            {" "}
            Jabalpur (M.P), India
          </A>
          . Self taught web developer able to build web site and web app (PWA)
          from group up - from concept, layouts and UX to programming with
          back-end logic. Fast learner, hard worker and team player.
        </p>
        <Lst className="lst" name="Achievements">
          {about.Achievements}
        </Lst>
      </div>
      <div className="col-3">
        <Lst className="lst" name="Certificates">
          {about.Certificates}
        </Lst>
      </div>
    </div>
  </section>
);
About.displayName = "About Me";

export default About;
