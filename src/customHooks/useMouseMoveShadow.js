import { useEffect } from "react";

export default () => {
  useEffect(() => {
    const container = document.querySelector(".col-container > span");
    const emojis = container.querySelector(".header-emojis");
    const walk = 30;

    function shadow(e) {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (isMobile) {
        return;
      }
      const { offsetWidth: width, offsetHeight: height } = container;
      let { offsetX: x, offsetY: y, target } = e;
      if (this !== target) {
        x = x + target.offsetLeft;
        y = y + target.offsetTop;
      }
      const xWalk = Math.round((x / width) * walk - walk / 2);
      const yWalk = Math.round((y / height) * walk - walk / 2);
      emojis.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
    }
    function defaultShadow() {
      emojis.style.textShadow = "0px 0px";
    }
    //listener
    container.addEventListener("mousemove", shadow);
    container.addEventListener("mouseleave", defaultShadow);
  }, []);
};
