import React from "react";
import usePlayTrack from "../../../customHooks/usePlayTrack";

export default ({ src, trackId, error, setError }) => {
  const { track, dispatch } = usePlayTrack(trackId, src);
  const { trackPlaying, isPlaying } = track;

  const handlePlay = () => {
    if (!src) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    } else {
      dispatch({ type: "PLAY", payload: trackId });
    }
  };
  const handlePause = () => {
    dispatch({ type: "PAUSE" });
  };

  return (
    <div
      className={
        isPlaying && trackPlaying === trackId ? "player is-playing" : "player"
      }
    >
      {src && !isPlaying && <span className="overlay-player" />}
      {src && isPlaying && trackPlaying !== trackId && (
        <span className="overlay-player" />
      )}
      {!error && !src && <span className="overlay-player" />}
      {!isPlaying && !error && (
        <i className="fas fa-play" id="play-icon" onClick={handlePlay} />
      )}
      {isPlaying && trackPlaying !== trackId && !error && (
        <i className="fas fa-play" id="play-icon" onClick={handlePlay} />
      )}
      {isPlaying && trackPlaying === trackId && src && (
        <i className="fas fa-pause" id="play-icon" onClick={handlePause} />
      )}
      {src && (
        <audio id={trackId} src={src} preload="none" onEnded={handlePause} />
      )}
    </div>
  );
};
