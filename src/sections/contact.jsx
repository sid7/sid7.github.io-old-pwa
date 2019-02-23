import React from "react";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { Stamp } from "../utils/comps";

const Contact = ({ links: { email, social, profiles } }) => (
  <section id="contact" className="sec sec-contact">
    <h2 className="sec-heading">Contact</h2>
    <div className="flx">
      <a className="link-btn" href={email} aria-label="email">
        <I icon={["far", "envelope"]} size="lg" fixedWidth />{" "}
        {email.substring(email.indexOf(":") + 1)}
      </a>
      <div className="stamp-group">
        {Object.entries(profiles).map(([a, b], i) => (
          <Stamp {...b} name={a} key={i} />
        ))}
        {Object.entries(social).map(([a, b], i) => (
          <Stamp {...b} name={a} key={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
