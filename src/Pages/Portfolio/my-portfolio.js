import fcc from "./list/fcc.js";
import codepen from "./list/codepen";

class myPortfolio {
  getAll() {
    return [...fcc, ...codepen];
  }
  getSec(sec) {
    return sec === "fcc" ? fcc : sec === "codepen" ? codepen : undefined;
  }
}

function addNew({ id: slug, title: name, details: about }) {
  const base_link = "https://www.codepen.io/sid7";
  return {
    slug,
    name,
    about,
    imgs: {
      lg: `${base_link}/pen/${slug}/image/large.png`,
      sm: `${base_link}/pen/${slug}/image/small.png`
    },
    links: {
      view: `${base_link}/full/${slug}`,
      code: `${base_link}/pen/${slug}`
    }
  };
}

export default new myPortfolio();
export { addNew };
