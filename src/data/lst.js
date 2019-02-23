import * as img from "../img";

function clinks(slug) {
  return {
    Code: `https://codepen.io/sid7/pen/${slug}`,
    View: `https://codepen.io/sid7/full/${slug}`
  };
}

export const about = {
  Certificates: {
    "Udaicty: Mobile Web Specialist Nanodegree":
      "https://confirm.udacity.com/EGTPLFVW",
    "FreeCodeCamp: Front-End Certificate":
      "https://www.freecodecamp.org/certification/sid7/legacy-front-end",
    "FreeCodeCamp: Responsive Web Design Certificate":
      "https://www.freecodecamp.org/certification/sid7/responsive-web-design",
    "FreeCodeCamp: JavaScript Algorithms and Data Structures Certificate":
      "https://www.freecodecamp.org/certification/sid7/javascript-algorithms-and-data-structures"
  },
  Achievements: {
    "Recipient of Google India Challenge Scholarship: Mobile Web":
      "https://in.udacity.com/google-india-scholarships",
    "GIS2018 Collaborative projects Moderator":
      "https://sites.google.com/prod/udacity.com/gis2018/community/collaborative-projects/mobile-web-specialist#h.p_a_ltL5EO8YDP"
  }
};

export const skills = [
  "HTML 5",
  "CSS 3",
  "JavaScript",
  "Node JS",
  "React JS",
  "Preact JS",
  "Git",
  "GitHub",
  "Webpack",
  "Gulp",
  "PWA",
  "SCSS",
  "ES6",
  "Bootstrap",
  "MDL",
  "jQuery"
];

export const ProjLst = [
  {
    name: "Restaurant Review App",
    desc: [""],
    img: img.restaurantReview,
    links: { "Project Repo": "https://github.com/sid7/mws-restaurant-stage-1" },
    host: "github"
  },
  {
    name: "The Game of Life",
    desc: [""],
    img: img.gameOfLife,
    links: clinks("vgJwoP"),
    host: "codepen"
  },
  {
    name: "Recipe Box",
    desc: [""],
    img: img.recipeBox,
    links: clinks("VPbGby"),
    host: "codepen"
  },
  {
    name: "Tic Tac Toe Game",
    desc: [""],
    img: img.ticTacToe,
    links: clinks("XKZLmr"),
    host: "codepen"
  },
  {
    name: "Pomodoro Clock",
    desc: [""],
    img: img.pClock,
    links: clinks("adRKBy"),
    host: "codepen"
  }
];

export const links = {
  profiles: {
    Codepen: { icon: "codepen", url: "https://codepen.io/sid7/" },
    GitHub: { icon: "github", url: "https://github.com/sid7" }
  },
  social: {
    LinkedIn: {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/suyashbhutani/"
    },
    Twitter: { icon: "twitter", url: "https://twitter.com/sidzxzx" }
  },
  fcc: {
    icon: "free-code-camp",
    url: "https://www.freecodecamp.org/sid7"
  },
  email: "mailto:suyashsidzzz@gmail.com"
};
