import React, { Fragment } from "react";
import "../styles/Card.css";

export const ArtistCard = ({ cardData, index }) => {
  var { name, images, genres } = cardData;
  genres = genres.slice(0, 3).join(", ");
  return (
    <Fragment>
      <div className="card">
        <span className="index">
          <p>{index}°</p>
        </span>
        <span className="img-container">
          <img src={images[2].url} className="card-image" alt="img" />
        </span>
        <div className="labels">
          <p className="name-id">{name}</p>
          <p>{genres}</p>
        </div>
      </div>
    </Fragment>
  );
};

// {genres.map(genre => genre)}
