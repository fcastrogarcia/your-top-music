import React, { Fragment, useContext } from "react";
import "../styles/Card.css";
import { Image } from "react-bootstrap";

export const Card = ({ cardData, indx }) => {
  const { name, images } = cardData;

  return (
    <Fragment>
      <div className="card">
        <h4 className="index">{indx}</h4>
        <Image
          src={images[2].url}
          className="card-image"
          style={{ display: "inline" }}
        />
        <p className="name">{name}</p>
      </div>
    </Fragment>
  );
};
