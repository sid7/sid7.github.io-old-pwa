const base_link = "https://www.codepen.io/sid7";

const codepen = [
  { id: "yOQjgY", name: "Note App" },
  { id: "QNvWdy", name: "MDl Form" }
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
});

codepen.reverse();
export default codepen;
