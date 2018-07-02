const types = [
  "Basic Front End Development Projects",
  "Intermediate Front End Development Projects",
  "Advanced Front End Development Projects",
  "React Projects"
];
const base_link = "https://www.codepen.io/sid7";

const fcc = [
  { id: "adXjpL", name: "Tribute Page", type: 0, theme: "53, 49, 48" },
  {
    id: "rxawxa",
    name: "Personal Portfolio Webpage",
    type: 0,
    theme: "104, 58, 32"
  },
  { id: "MKbPZW", name: "Random Quote Machine", type: 1, theme: "26, 28, 28" },
  { id: "bEzPJE", name: "Local Weather", type: 1, theme: "68, 68, 68" },
  { id: "GoLJdv", name: "Wikipedia Viewer", type: 1, theme: "70, 190, 163" },
  { id: "WrBarp", name: "Twitch.tv JSON API", type: 1, theme: "234, 234, 233" },
  { id: "YwZaGx", name: "JavaScript Calculator", type: 2, theme: "35, 35, 35" },
  { id: "adRKBy", name: "Pomodoro Clock", type: 2, theme: "90, 80, 139" },
  { id: "XKZLmr", name: "Tic Tac Toe Game", type: 2, theme: "23, 100, 61" },
  { id: "QKgWxR", name: "Simon Game", type: 2, theme: "64, 79, 139" },
  { id: "VPmbLv", name: "Markdown Previewer", type: 3, theme: "54, 120, 172" },
  { id: "JEWmqg", name: "Camper Leaderboard", type: 3, theme: "76, 171, 83" },
  { id: "VPbGby", name: "Recipe Box", type: 3, theme: "251, 251, 251" },
  { id: "vgJwoP", name: "Game of Life", type: 3, theme: "251, 251, 251" },
  {
    id: "KXNpoe",
    name: "Roguelike Dungeon Crawler",
    type: 3,
    theme: "52, 60, 68"
  }
];

fcc.forEach(a => {
  a.type = types[a.type];
  a.links = {
    view: `${base_link}/full/${a.id}`,
    code: `${base_link}/pen/${a.id}`
  };
  a.imgs = {
    lg: `${base_link}/pen/${a.id}/image/large.png`,
    sm: `${base_link}/pen/${a.id}/image/small.png`
  };
  a.parts = { fcc: true, host: "codepen" };
  a.backImg = `linear-gradient(rgba(${a.theme}, 0.6), rgba(${a.theme}, 0.9))`;
});

fcc.reverse();
export default fcc;
