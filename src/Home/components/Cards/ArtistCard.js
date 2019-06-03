import React, { Fragment } from "react";
import LazyLoad from "react-lazyload";
import "../../styles/Card.css";

export const ArtistCard = ({ name, images, genres, index }) => {
  genres = genres.slice(0, 4).join(", ");
  console.log(images);
  const imageSrc = images.lenght !== 0 ? images[2].url : null;
  return (
    <Fragment>
      <div className="card">
        <span className="index">
          <p>{index}</p>
        </span>
        <span className="img-container">
          {imageSrc && (
            <LazyLoad once>
              <img src={imageSrc} className="card-image" alt="artist" />
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
