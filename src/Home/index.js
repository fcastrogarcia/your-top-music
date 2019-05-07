import React, { Fragment, useContext, useEffect } from "react";
import Header from "./components/Header";
import useFetchData from "../customHooks/useFetchData";
import useTokenParser from "../customHooks/useParseToken";
import BarLoader from "./components/LoadingSpinner";
import { Layout } from "./components/Layout";

export default function Home() {
  //Context

  //custom hooks
  const token = useTokenParser();
  const { isLoading } = useFetchData(token);

  return (
    <Fragment>
      {isLoading && <BarLoader />}
      {!isLoading && (
        <Fragment>
          <Header />
          <Layout />
        </Fragment>
      )}
    </Fragment>
  );
}
