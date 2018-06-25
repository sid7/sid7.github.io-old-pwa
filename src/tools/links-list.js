const profiles = [
  { fa: "codepen", title: "Codepen", to: "https://codepen.io/sid7/" },
  { fa: "github", title: "GitHub", to: "https://github.com/sid7" },
  {
    fa: "free-code-camp",
    title: "Free Code Camp",
    to: "https://www.freecodecamp.org/portfolio/sid7"
  }
];

const pages = [
  { to: "/about", text: "About Me" },
  { to: "/portfolio", text: "My Portfolio" },
  { to: "/contact", text: "Contact Me" }
];

const email = {
  faPre: "far",
  fa: "envelope",
  title: "E-mail",
  to: "mailto:suyashsidzzz@gmail.com"
};

const social = [...profiles, email];

const contactMe = {
  profiles,
  social: [
    {
      fa: "facebook-f",
      url: "https://www.facebook.com/sidzxzx",
      text: "Facebook"
    },
    {
      fa: "linkedin-in",
      url: "https://www.linkedin.com/in/suyashbhutani/",
      text: "LinkedIn"
    },
    { fa: "twitter", url: "https://twitter.com/sidzxzx", text: "Twitter" }
  ]
};

export { pages, email, social, contactMe };
