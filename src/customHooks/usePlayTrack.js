import { useEffect, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default (id, src) => {
  const { track, dispatch } = useContext(PlayerContext);
  const { trackPlaying, isPlaying } = track;
  const state = {
    track,
    dispatch
  };
  if (src === null) {
    return state;
  }
  const playPause = () => {
    const audio = document.getElementById(id);
    if (trackPlaying === id && isPlaying === true) {
      return audio.play();
    } else if (trackPlaying === id && isPlaying === false) {
      return audio.pause();
    } else if (trackPlaying !== id) {
      audio.currentTime = 0;
      return audio.pause();
    }
  };
  useEffect(() => {
    playPause();
  }, [track]);

  return state;
};
