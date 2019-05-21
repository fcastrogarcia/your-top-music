import React, { Fragment, useContext } from "react";
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
  const { track } = useContext(PlayerContext);
  const { trackPlaying, isPlaying } = track;
  const trackId = `track${index}`;

  return (
    <Fragment>
      <div className="card">
        {isPlaying && trackPlaying === trackId && preview_url === null && (
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
        <p className="index">{index}</p>
        <span className="img-container">
          <LazyLoad>
            <img
              src={album.images[1].url}
              className="card-image"
              alt="cover-art"
            />
          </LazyLoad>
          <Player src={preview_url} trackId={trackId} />
        </span>
        <div className="labels">
          <p className="name-id" id="name-id-tracks">
            {name}
          </p>
          <p>{album.artists[0].name}</p>
          <p>
            <i>{album.name}</i>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
