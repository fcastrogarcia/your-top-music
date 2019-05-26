import React, { useContext, useState } from "react";
import Player from "./Player";
import PlayingOverlay from "./PlayingOverlay";
import ErrorOverlay from "./ErrorOverlay";
import LazyLoad from "react-lazyload";
import "../../styles/Card.css";
import { PlayerContext } from "../../../context/PlayerContext";

export const TrackCard = ({
  name,
  album,
  preview_url,
  index,
  external_urls
}) => {
  const [error, setError] = useState(false);
  const { track } = useContext(PlayerContext);

  const { trackPlaying, isPlaying } = track;
  const trackId = index;
  const trackName = name.length > 60 ? name.slice(0, 60).concat("...") : name;
  const albumName =
    album.name.length > 35 ? album.name.slice(0, 33).concat("...") : album.name;
  const playerProps = {
    error,
    setError,
    trackId,
    src: preview_url
  };

  return (
    <div className="card">
      {error && <ErrorOverlay src={external_urls} />}
      {isPlaying && trackPlaying === trackId && (
        <PlayingOverlay trackId={trackId} src={external_urls.spotify} />
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
        <p className="name-id">{trackName}</p>
        <p>{album.artists[0].name}</p>
        <p>
          <i>{albumName}</i>
        </p>
      </div>
    </div>
  );
};
