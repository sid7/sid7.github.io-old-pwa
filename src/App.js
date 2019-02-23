import React, { Component } from "react";
import { Home, About, Skills, MyProjects, Contact } from "./sections";
import { ProjLst, links } from "./data/lst";
import scrollSpy from "./utils/scroll-spy";
import utils from "./utils/utils";

window.scrollSpy = scrollSpy;
window.utils = utils;

class App extends Component {
  static displayName = "Suyash Bhutani";
  componentDidMount() {
    scrollSpy.init({ target: ".sec" });
    window.addEventListener("scroll", scrollSpy.agent);
    document.querySelectorAll(".img-container").forEach(i => {
      i.addEventListener("mousemove", utils.zoomEft);
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", scrollSpy.agent);
    document.querySelectorAll(".img-container").forEach(i => {
      i.removeEventListener("mousemove", utils.zoomEft);
    });
  }
  render() {
    return (
      <>
        <Home />
        <nav className="site-nav" aria-label="site link">
          <a href="#about" onClick={utils.aniScroll}>
            About
          </a>
          {/* <a href="#skills" onClick={utils.aniScroll}>
            Skills
          </a> */}
          <a href="#projects" onClick={utils.aniScroll}>
            Projects
          </a>
          <a href="#contact" onClick={utils.aniScroll}>
            Contact
          </a>
        </nav>
        <About />
        {/* <Skills /> */}
        <MyProjects
          lst={ProjLst}
          pl={{ ...links.profiles, FreeCodeCamp: links.fcc }}
          zPan={utils.zoomEft}
        />
        <Contact links={links} />
        <footer>Suyash Bhutani &copy; {utils.thisYear}</footer>
      </>
    );
  }
}

export default App;
