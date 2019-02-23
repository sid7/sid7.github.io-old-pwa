const $ = q => document.querySelector(q);

export default new class utils {
  constructor() {
    this.thisYear = new Date().getFullYear();
  }
  aniScroll(e) {
    e.preventDefault();
    const el = $(e.currentTarget.getAttribute("href"));
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  zoomEft(e) {
    const img = this.querySelector("img");
    const o = `${((e.pageX - this.offsetLeft) / this.offsetWidth) *
      100}% ${((e.pageY - this.offsetTop) / this.offsetHeight) * 100}%`;
    img.style.transformOrigin = o;
  }
}();
