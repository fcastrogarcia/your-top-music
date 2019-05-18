import { useState, useEffect } from "react";

export default id => {
  const [playing, setPlaying] = useState(false);
  const playPause = () => {
    if (playing) {
      return document.getElementById(id).play();
    } else {
      return document.getElementById(id).pause();
    }
  };
  useEffect(() => {
    playPause();
  }, [playing]);

  return {
    playing,
    setPlaying
  };
};
