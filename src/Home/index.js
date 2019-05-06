import React, { Fragment, useContext } from "react";
import Header from "./components/Header";
import useFetchData from "../customHooks/useFetchData";
import useTokenParser from "../customHooks/useParseToken";
import BarLoader from "./components/LoadingSpinner";
import { Layout } from "./components/Layout";

export default function Home() {
  //Context

  const token = useTokenParser();
  const { isLoading } = useFetchData(token);

  // if (isError) return <div className='spinner-body'><h1>something went wrong...</h1></div>;

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
