import React from "react";
import usePlayTrack from "../../customHooks/usePlayTrack";

export default ({ src, index }) => {
  const id = `track${index}`;
  const { playing, setPlaying } = usePlayTrack(id);

  return (
    <div id="player">
      <span className="overlay-player" />
      {!playing && (
        <i
          className="fas fa-play"
          id="play-icon"
          onClick={() => setPlaying(true)}
        />
      )}
      {playing && (
        <i
          className="fas fa-pause"
          id="play-icon"
          onClick={() => setPlaying(false)}
        />
      )}
      <audio id={id} src={src} preload="auto" />
    </div>
  );
};
