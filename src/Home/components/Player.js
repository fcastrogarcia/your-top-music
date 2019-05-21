import React from "react";
import usePlayTrack from "../../customHooks/usePlayTrack";

export default ({ src, trackId }) => {
  const { track, dispatch } = usePlayTrack(trackId, src);
  const { trackPlaying, isPlaying } = track;

  const handlePlay = () => {
    dispatch({ type: "PLAY", payload: trackId });
  };
  const handlePause = () => {
    dispatch({ type: "PAUSE" });
  };

  return (
    <div id="player">
      {isPlaying && trackPlaying !== trackId && src === null && (
        <span className="overlay-player" />
      )}
      {src !== null && <span className="overlay-player" />}
      {!isPlaying && (
        <i className="fas fa-play" id="play-icon" onClick={handlePlay} />
      )}
      {isPlaying && trackPlaying !== trackId && (
        <i className="fas fa-play" id="play-icon" onClick={handlePlay} />
      )}
      {isPlaying && trackPlaying === trackId && src !== null && (
        <i className="fas fa-pause" id="play-icon" onClick={handlePause} />
      )}
      {src !== null && (
        <audio id={trackId} src={src} preload="auto" onEnded={handlePause} />
      )}
    </div>
  );
};
