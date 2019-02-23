const $ = q => document.querySelector(q);
const $$ = q => [].slice.call(document.querySelectorAll(q));

const colors = {
  home: "#ff7f50",
  about: "#009688",
  skills: "#e91e63",
  projects: "#03a9f4",
  contact: "#673ab7"
};

export default new class scrollSpy {
  constructor() {
    this.tick = false;
    this.lst = {};
    this.opt = { pad: 50 };
  }
  setPos = () => {
    this.secs.forEach(t => {
      this.lst[t.id] = t.offsetTop - this.opt.pad;
    });
  };
  init = ({ target, ...p }) => {
    this.target = target;
    this.secs = $$(target);
    // this.opt = Object.assign(this.opt, ...(p || {}));
    this.setPos();
  };
  getActiveSec = pos => {
    let rtn;
    for (const i in this.lst) {
      if (this.lst[i] <= pos) {
        rtn = i;
      }
    }
    return rtn;
  };
  agent = () => {
    const pos = document.documentElement.scrollTop || document.body.scrollTop;
    if (!this.tick) {
      const sec = this.getActiveSec(pos);
      requestAnimationFrame(() => {
        if ($(".site-nav .active")) {
          $(".site-nav .active").classList.remove("active");
        }
        const a = $(`a[href="#${sec}"]`);
        if (a) {
          a.classList.add("active");
        }
        $("meta[name='theme-color']").setAttribute(
          "content",
          colors[sec] || colors.home
        );
        document.body.className = `active-${
          a ? a.hash.replace("#", "") : "home"
        }`;
        this.tick = false;
      });
      this.tick = true;
    }
  };
}();
