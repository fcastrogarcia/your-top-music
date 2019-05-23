import React, { useEffect, useState, Fragment } from "react";
import { BeatLoader } from "react-spinners";
import "../styles/Equalizer.css";

export default ({ trackId, src }) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let track = document.getElementById(trackId);

    track.addEventListener("playing", () => {
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
          <i-amp-video-eq>
            <div className="-amp-video-eq-col">
              <div className="-amp-video-eq-1-1" />
              <div className="-amp-video-eq-1-2" />
            </div>
            <div className="-amp-video-eq-col">
              <div className="-amp-video-eq-2-1" />
              <div className="-amp-video-eq-2-2" />
            </div>
            <div className="-amp-video-eq-col">
              <div className="-amp-video-eq-3-1" />
              <div className="-amp-video-eq-3-2" />
            </div>
            <div className="-amp-video-eq-col">
              <div className="-amp-video-eq-4-1" />
              <div className="-amp-video-eq-4-2" />
            </div>
          </i-amp-video-eq>
        </Fragment>
      )}
    </span>
  );
};
