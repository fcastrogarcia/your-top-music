import React, { Fragment, useContext, useState } from "react";

import { DataContext } from "../../../context/DataContext";
import "../../styles/TypeToggler.css";

export default () => {
  //context
  const { type, setType } = useContext(DataContext);

  const typeToggler = () => {
    type === "artists" ? setType("tracks") : setType("artists");
  };

  return (
    <Fragment>
      <div className="selector-container">
        <span className="selector" onClick={typeToggler}>
          <span>
            <i className="fas fa-sort" />
          </span>
          <p>Top</p>
          <div className="text-slider-container">
            <span
              className={
                type === "tracks" ? "text-slider toggle" : "text-slider"
              }
            >
              artists
            </span>
            <span> tracks</span>
          </div>
        </span>
      </div>
    </Fragment>
  );
};
