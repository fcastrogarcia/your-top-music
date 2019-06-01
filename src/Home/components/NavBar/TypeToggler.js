import React, { Fragment, useContext } from "react";

import { DataContext } from "../../../context/DataContext";
import "../../styles/TypeToggler.css";

export default () => {
  //context
  const { store, dispatch } = useContext(DataContext);
  const { type } = store;
  const typeToggler = () => {
    type === "artists"
      ? dispatch({ type: "TYPE", payload: "tracks" })
      : dispatch({ type: "TYPE", payload: "artists" });
  };

  return (
    <Fragment>
      <div className="selector-container">
        <span className="selector" onClick={typeToggler}>
          <span>
            <i className="fas fa-sort" />
          </span>
          <div className="text-slider-container">
            <span
              className={
                type === "tracks" ? "text-slider toggle" : "text-slider"
              }
            >
              Artists
            </span>
            <span> Tracks</span>
          </div>
        </span>
      </div>
    </Fragment>
  );
};
