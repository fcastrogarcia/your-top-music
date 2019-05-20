import React from "react";
import usePlayTrack from "../../customHooks/usePlayTrack";

export default ({ src, index }) => {
  const trackId = `track${index}`;
  const { track, dispatch } = usePlayTrack(trackId, src);
  const { currentTrack, isPlaying } = track;

  const handlePlay = () => {
    dispatch({ type: "PLAY", payload: trackId });
  };
  const handlePause = () => {
    dispatch({ type: "PAUSE" });
  };

  return (
    <div id="player">
      <span className="overlay-player" />
      {!isPlaying && (
        <i className="fas fa-play" id="play-icon" onClick={handlePlay} />
      )}
      {isPlaying && currentTrack !== trackId && (
        <i className="fas fa-play" id="play-icon" onClick={handlePlay} />
      )}
      {isPlaying && currentTrack === trackId && src !== null && (
        <i className="fas fa-pause" id="play-icon" onClick={handlePause} />
      )}
      {src !== null && <audio id={trackId} src={src} preload="auto" />}
    </div>
  );
};
