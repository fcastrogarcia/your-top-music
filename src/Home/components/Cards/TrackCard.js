import React, { useContext, useState, useRef } from "react";
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
  //state & context
  const audioRef = useRef(null);
  const [error, setError] = useState(false);
  const { track } = useContext(PlayerContext);
  const { trackPlaying, isPlaying } = track;

  const trackId = index;
  //name length handling
  const trackName = name.length > 60 ? name.slice(0, 60).concat("...") : name;
  const albumName =
    album.name.length > 35 ? album.name.slice(0, 33).concat("...") : album.name;

  const playerProps = {
    error,
    setError,
    trackId,
    src: preview_url,
    audioRef
  };
  //image src
  const { images } = album;
  const image_src = !images.length
    ? null
    : images.length < 2
    ? images[0].url
    : images[1].url;

  return (
    <div className="card">
      {error && <ErrorOverlay src={external_urls} />}
      {isPlaying && trackPlaying === trackId && (
        <PlayingOverlay
          trackId={trackId}
          src={external_urls.spotify}
          audioRef={audioRef}
        />
      )}
      <p className="index">{index}</p>
      <span className="img-container">
        {image_src && (
          <LazyLoad once>
            <img src={image_src} className="card-image" alt="cover-art" />
          </LazyLoad>
        )}
        <Player {...playerProps} />
      </span>
      <div className="labels">
        <p className="name-id" id="name-id-tracks">
          {trackName}
        </p>
        <p>{album.artists[0].name}</p>
        <p>
          <i>{albumName}</i>
        </p>
      </div>
    </div>
  );
};
