import React, { Fragment } from "react";
import "../styles/Card.css";

export const ArtistCard = ({ cardData, indx }) => {
  var { name, images, genres } = cardData;
  genres = genres.slice(0, 3).join(", ");
  return (
    <Fragment>
      <div className="card">
        <p className="index">{indx}</p>
        <span className="img-container">
          <img src={images[2].url} className="card-image" alt="img" />
        </span>
        <div className="labels">
          <p className="label-name">{name}</p>
          <p>{genres}</p>
        </div>
      </div>
    </Fragment>
  );
};

// {genres.map(genre => genre)}
