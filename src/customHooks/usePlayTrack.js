import { useEffect, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

export default (id, src, audioRef) => {
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
    if (trackPlaying === id && isPlaying === true) {
      return audioRef.current.play();
    } else if (trackPlaying === id && isPlaying === false) {
      return audioRef.current.pause();
    } else if (trackPlaying !== id) {
      audioRef.current.currentTime = 0;
      return audioRef.current.pause();
    }
  };
  useEffect(() => {
    playPause();
  }, [track]);

  return state;
};
