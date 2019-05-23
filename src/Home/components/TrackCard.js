import React, { useContext, useState } from "react";
import Player from "./Player";
import Equalizer from "./EqualizerOverlay";
import ErrorOverlay from "./ErrorOverlay";
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
  const [error, setError] = useState(false);
  const { track } = useContext(PlayerContext);

  const { trackPlaying, isPlaying } = track;
  const trackId = `track${index}`;
  const trackName = name.length > 75 ? name.slice(0, 75).concat("...") : name;
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
        <Equalizer trackId={trackId} src={external_urls.spotify} />
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
          {trackName}
        </p>
        <p>{album.artists[0].name}</p>
        <p>
          <i>{album.name}</i>
        </p>
      </div>
    </div>
  );
};
