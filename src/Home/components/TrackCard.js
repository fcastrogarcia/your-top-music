import React, { useContext, useState } from "react";
import Player from "./Player";
import LazyLoad from "react-lazyload";
import "../styles/Card.css";
import { PlayerContext } from "../../context/PlayerContext";

export const TrackCard = ({
  name,
  album,
  preview_url,
  index,
  external_urls
}) => {
  const [error, setError] = useState({ isError: false, trackId: "" });
  const { track } = useContext(PlayerContext);

  const { trackPlaying, isPlaying } = track;

  const trackId = `track${index}`;

  const trackName = () => {
    if (name.length > 75) {
      return name.slice(0, 75).concat("...");
    } else {
      return name;
    }
  };
  const playerProps = {
    error,
    setError,
    trackId,
    src: preview_url
  };
  return (
    <div className="card">
      {error.isError && (
        <span className="overlay-nosrc">
          <p>
            Oops! no preview for this song.
            <br /> Open up in{" "}
            <a
              href={external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify&nbsp;
              <i className="fab fa-spotify" />
            </a>
          </p>
        </span>
      )}
      {isPlaying && trackPlaying === trackId && (
        <span className="overlay-nosrc">Now Playing!</span>
      )}
      <p className="index">{index}</p>
      <span className="img-container">
        <LazyLoad>
          <img
            src={album.images[1].url}
            className="card-image"
            alt="cover-art"
          />
        </LazyLoad>
        <Player {...playerProps} />
      </span>
      <div className="labels">
        <p className="name-id" id="name-id-tracks">
          {trackName()}
        </p>
        <p>{album.artists[0].name}</p>
        <p>
          <i>{album.name}</i>
        </p>
      </div>
    </div>
  );
};
