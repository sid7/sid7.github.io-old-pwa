const base_link = "https://www.codepen.io/sid7";

const codepen = [
  { id: "yOQjgY", name: "Note App", theme: "228, 60, 52" },
  { id: "QNvWdy", name: "MDl Form", theme: "237, 237, 244" }
];

codepen.forEach(a => {
  a.links = {
    view: `${base_link}/full/${a.id}`,
    code: `${base_link}/pen/${a.id}`
  };
  a.imgs = {
    lg: `${base_link}/pen/${a.id}/image/large.png`,
    sm: `${base_link}/pen/${a.id}/image/small.png`
  };
  a.parts = { host: "codepen" };
  a.backImg = `linear-gradient(rgba(${a.theme}, 0.6), rgba(${a.theme}, 0.9))`;
});

codepen.reverse();
export default codepen;
