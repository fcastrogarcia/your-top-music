import { useEffect, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default (id, src) => {
  const { track, dispatch } = useContext(PlayerContext);
  const { currentTrack, isPlaying } = track;
  const state = {
    track,
    dispatch
  };
  if (src === null) {
    return state;
  }
  const playPause = () => {
    const audio = document.getElementById(id);
    if (currentTrack === id && isPlaying === true) {
      return audio.play();
    } else if (currentTrack === id && isPlaying === false) {
      return audio.pause();
    } else if (currentTrack !== id) {
      return audio.pause();
    }
  };
  useEffect(() => {
    playPause();
  }, [track]);

  return state;
};
