import React, { Fragment } from "react";
import LazyLoad from "react-lazyload";
import "../../styles/Card.css";

export const ArtistCard = ({ name, images, genres, index }) => {
  genres = genres.slice(0, 4).join(", ");
  const image_src = !images.length ? null : images[2].url;

  return (
    <Fragment>
      <div className="card">
        <span className="index">
          <p>{index}</p>
        </span>
        <span className="img-container">
          {image_src && (
            <LazyLoad once>
              <img src={image_src} className="card-image" alt="artist" />
            </LazyLoad>
          )}
        </span>
        <div className="labels artists">
          <p className="name-id" id="artists">
            {name}
          </p>
          <p id="genres-text">{genres}</p>
        </div>
      </div>
    </Fragment>
  );
};
