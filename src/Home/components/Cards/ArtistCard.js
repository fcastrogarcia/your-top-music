import React, { Fragment } from "react";
import LazyLoad from "react-lazyload";
import "../../styles/Card.css";

export const ArtistCard = ({ name, images, genres, index }) => {
  genres = genres.slice(0, 4).join(", ");
  return (
    <Fragment>
      <div className="card">
        <span className="index">
          <p>{index}</p>
        </span>
        <span className="img-container">
          <LazyLoad>
            <img src={images[2].url} className="card-image" alt="artist" />
          </LazyLoad>
        </span>
        <div className="labels artists">
          <p className="name-id" id="artists">
            {name}
          </p>
          <p>{genres}</p>
        </div>
      </div>
    </Fragment>
  );
};
