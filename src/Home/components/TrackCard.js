import React, { Fragment } from "react";
import "../styles/Card.css";

export const TrackCard = ({ cardData, indx }) => {
  var { name, album } = cardData;

  return (
    <Fragment>
      <div className="card">
        <p className="index">{indx}</p>
        <span className="img-container">
          <img src={album.images[1].url} className="card-image" alt="img" />
        </span>
        <div className="labels">
          <p className="label-name">{name}</p>
          <p>{album.artists[0].name}</p>
          <p>
            <i>{album.name}</i>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

// {genres.map(genre => genre)}
