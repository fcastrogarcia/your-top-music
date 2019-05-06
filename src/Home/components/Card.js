import React, { Fragment, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "../styles/Card.css";

export const Card = () => {
  const { data } = useContext(DataContext);

  return (
    <Fragment>
      <div className="card" />
    </Fragment>
  );
};
