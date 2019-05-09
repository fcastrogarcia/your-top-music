import React, { useContext, Fragment } from "react";
import Layout from "../Layout";
import { DataContext } from "../../../context/DataContext";

export default () => {
  const { data } = useContext(DataContext);
  const { medium_term } = data.artists;
  return (
    <Fragment>
      <Layout term={medium_term} />
    </Fragment>
  );
};
