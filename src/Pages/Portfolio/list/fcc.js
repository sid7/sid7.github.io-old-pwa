const types = [
  "Basic Front End Development Projects",
  "Intermediate Front End Development Projects",
  "Advanced Front End Development Projects",
  "React Projects"
];
const base_link = "https://www.codepen.io/sid7";

const fcc = [
  { id: "adXjpL", name: "Tribute Page", type: 0 },
  { id: "rxawxa", name: "Personal Portfolio Webpage", type: 0 },
  { id: "MKbPZW", name: "Random Quote Machine", type: 1 },
  { id: "bEzPJE", name: "Local Weather", type: 1 },
  { id: "GoLJdv", name: "Wikipedia Viewer", type: 1 },
  { id: "WrBarp", name: "Twitch.tv JSON API", type: 1 },
  { id: "YwZaGx", name: "JavaScript Calculator", type: 2 },
  { id: "adRKBy", name: "Pomodoro Clock", type: 2 },
  { id: "XKZLmr", name: "Tic Tac Toe Game", type: 2 },
  { id: "QKgWxR", name: "Simon Game", type: 2 },
  { id: "VPmbLv", name: "Markdown Previewer", type: 3 },
  { id: "JEWmqg", name: "Camper Leaderboard", type: 3 },
  { id: "VPbGby", name: "Recipe Box", type: 3 },
  { id: "vgJwoP", name: "Game of Life", type: 3 },
  { id: "KXNpoe", name: "Roguelike Dungeon Crawler", type: 3 }
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
});

fcc.reverse();
export default fcc;
