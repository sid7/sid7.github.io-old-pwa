import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
  faPython,
  faCss3Alt,
  faTwitter,
  faFreeCodeCamp
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

library.add(
  faCodepen,
  faGithub,
  faLinkedin,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
  faPython,
  faCss3Alt,
  faTwitter,
  faFreeCodeCamp,
  faEnvelope
);

window.faLib = library;

window.addEventListener("DOMContentLoaded", function() {
  dom.watch();
});
