import React, { useContext, Fragment } from "react";
import Layout from "../Layout";
import { DataContext } from "../../../context/DataContext";

export default () => {
  const { data } = useContext(DataContext);
  const { long_term } = data.artists;
  return (
    <Fragment>
      <Layout term={long_term} />
    </Fragment>
  );
};
