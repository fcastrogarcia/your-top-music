import { useEffect, useRef } from "react";

export default () => {
  const emojisRef = useRef();

  useEffect(() => {
    const refCopy = emojisRef;
    const walk = 22;

    function shadow(e) {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      if (isMobile) {
        return;
      }
      const { offsetWidth: width, offsetHeight: height } = emojisRef.current;
      let { offsetX: x, offsetY: y, target } = e;
      if (this !== target) {
        x = x + target.offsetLeft;
        y = y + target.offsetTop;
      }
      const xWalk = Math.round((x / width) * walk - walk / 2);
      const yWalk = Math.round((y / height) * walk - walk / 2);
      emojisRef.current.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
    }
    function defaultShadow() {
      emojisRef.current.style.textShadow = "0px 0px";
    }
    //listener
    emojisRef.current.addEventListener("mousemove", shadow);
    emojisRef.current.addEventListener("mouseleave", defaultShadow);

    return () => {
      refCopy.current.removeEventListener("mouseleave", defaultShadow);
      refCopy.current.removeEventListener("mousemove", shadow);
    };
  }, []);

  return { emojisRef };
};
