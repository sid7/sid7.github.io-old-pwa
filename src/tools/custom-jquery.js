import $ from "jquery/dist/jquery.slim";

$.fn.extend({
  animateCss: function animateCss(aniName, infi, callback) {
    if (typeof infi === "function") {
      callback = infi;
      infi = undefined;
    }
    const aniEnd =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    this.addClass(`animated ${aniName}`).one(aniEnd, () => {
      $(this).removeClass(`animated ${aniName}`);
      if (callback) {
        callback();
      }
    });
    return this;
  }
});

export default $;
