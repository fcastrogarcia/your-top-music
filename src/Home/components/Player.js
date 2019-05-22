import React from "react";
import usePlayTrack from "../../customHooks/usePlayTrack";

export default ({ src, trackId, error, setError }) => {
  const { track, dispatch } = usePlayTrack(trackId, src);
  const { trackPlaying, isPlaying } = track;
  const { isError } = error;

  const handlePlay = () => {
    if (src === null) {
      setError({ isError: true, trackId: trackId });
      setTimeout(() => {
        setError({ ...error, isError: false });
      }, 4000);
    } else {
      dispatch({ type: "PLAY", payload: trackId });
    }
  };
  const handlePause = () => {
    dispatch({ type: "PAUSE" });
  };

  return (
    <div id="player">
      {src !== null && !isPlaying && <span className="overlay-player" />}
      {src !== null && isPlaying && trackPlaying !== trackId && (
        <span className="overlay-player" />
      )}
      {isError === false && src === null && <span className="overlay-player" />}
      {!isPlaying && isError === false && (
        <i className="fas fa-play" id="play-icon" onClick={handlePlay} />
      )}
      {isPlaying && trackPlaying !== trackId && isError === false && (
        <i className="fas fa-play" id="play-icon" onClick={handlePlay} />
      )}
      {isPlaying && trackPlaying === trackId && src !== null && (
        <i className="fas fa-pause" id="play-icon" onClick={handlePause} />
      )}
      {src !== null && (
        <audio id={trackId} src={src} preload="metada " onEnded={handlePause} />
      )}
    </div>
  );
};
