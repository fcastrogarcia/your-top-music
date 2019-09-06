import React, { useEffect, useState, Fragment } from "react";
import { BeatLoader } from "react-spinners";
import Equalizer from "./Equalizer";
import "../../styles/Equalizer.css";

export default ({ trackId, src, audioRef }) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.addEventListener("playing", () => {
      setPlaying(true);
    });
  }, [trackId]);

  return (
    <span className="overlay-nosrc equalizer">
      {!playing && <BeatLoader color={"#7FFFD4"} />}
      {playing && (
        <Fragment>
          <a
            style={{ textDecoration: "none", color: "#7FFFD4" }}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-spotify" id="spotify-icon" />
          </a>
          <Equalizer />
        </Fragment>
      )}
    </span>
  );
};
