import { useState, useEffect } from "react";
import fallbackSrc from "../assets/fallbackImg2.png";

export default images => {
  const [currentSrc, setCurrentSrc] = useState("");

  useEffect(() => {
    if (images.length === 0) {
      const fallbackImg = new Image();
      fallbackImg.src = fallbackSrc;
      fallbackImg.onload = () => {
        setCurrentSrc(fallbackSrc);
      };
    } else {
      const mainImg = new Image();
      mainImg.src = images[0].url;
      mainImg.onload = () => {
        setCurrentSrc(images[0].url);
      };
    }
  }, [images]);
  return currentSrc;
};
