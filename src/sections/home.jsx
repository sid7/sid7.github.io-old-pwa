import React from "react";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { A } from "../utils/comps";

const Home = () => (
  <header id="home" className="sec sec-home">
    <h1>Suyash Bhutani</h1>
    <nav aria-label="profile links">
      <A className="quick-link" href="https://codepen.io/sid7/">
        <I icon={["fab", "codepen"]} size="2x" fixedWidth />
      </A>{" "}
      <A className="quick-link" href="https://github.com/sid7">
        <I icon={["fab", "github"]} size="2x" fixedWidth />
      </A>{" "}
      <A
        className="quick-link"
        href="https://www.linkedin.com/in/suyashbhutani/"
      >
        <I icon={["fab", "linkedin"]} size="2x" fixedWidth />
      </A>
    </nav>
  </header>
);

export default Home;
