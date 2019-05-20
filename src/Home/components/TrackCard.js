import React, { Fragment } from "react";
import Player from "./Player";
import LazyLoad from "react-lazyload";
import "../styles/Card.css";

export const TrackCard = ({ name, album, preview_url, index }) => {
  return (
    <Fragment>
      <div className="card">
        <p className="index">{index}</p>
        <span className="img-container">
          <LazyLoad>
            <img
              src={album.images[1].url}
              className="card-image"
              alt="cover-art"
            />
          </LazyLoad>
          <Player src={preview_url} index={index} />
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
