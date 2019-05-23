import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import useFetchData from "../customHooks/useFetchData";
import useTokenParser from "../customHooks/useParseToken";
import BarLoader from "./components/LoadingSpinner";
import NavBar from "./components/NavBar/NavBar";
import ShortTermTab from "./components/tabs/ShortTermTab";
import MediumTermTab from "./components/tabs/MediumTermTab";
import LongTermTab from "./components/tabs/LongTermTab";

export default function Home() {
  //local state
  const [tab, setTab] = useState(1);

  //custom hooks
  useTokenParser();
  const { isLoading, error } = useFetchData();

  return (
    <Fragment>
      {error && (
        <span className="spinner-body">Oops! something went wrong...</span>
      )}
      {isLoading && <BarLoader />}
      {!isLoading && !error && (
        <Fragment>
          <Header />
          <NavBar setTab={setTab} tab={tab} />
          {tab === 1 && <LongTermTab />}
          {tab === 2 && <MediumTermTab />}
          {tab === 3 && <ShortTermTab />}
        </Fragment>
      )}
    </Fragment>
  );
}
