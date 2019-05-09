import React, { useContext, Fragment } from "react";
import Layout from "../Layout";
import { DataContext } from "../../../context/DataContext";

export default () => {
  const { data } = useContext(DataContext);
  const { short_term } = data.artists;
  return (
    <Fragment>
      <Layout term={short_term} />
    </Fragment>
  );
};
