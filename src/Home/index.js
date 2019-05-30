import React, { Fragment, useState } from "react";
import useFetchData from "../customHooks/useFetchData";
import useTokenParser from "../customHooks/useParseToken";
//components
import BarLoader from "./components/LoadingSpinner";
import Error from "./components/Error";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ShortTermTab from "./components/tabs/ShortTermTab";
import MediumTermTab from "./components/tabs/MediumTermTab";
import LongTermTab from "./components/tabs/LongTermTab";
// import PlaylistCreator from "./components/PlaylistCreator";

export default function Home() {
  //local state
  const [tab, setTab] = useState(1);

  //custom hooks
  useTokenParser();
  const { isLoading, error } = useFetchData();

  return (
    <Fragment>
      {error && <Error />}
      {isLoading && !error && <BarLoader />}
      {!isLoading && !error && (
        <Fragment>
          <Header />
          <NavBar setTab={setTab} tab={tab} />
          {tab === 1 && <LongTermTab />}
          {tab === 2 && <MediumTermTab />}
          {tab === 3 && <ShortTermTab />}
          {/* <PlaylistCreator tab={tab} /> */}
        </Fragment>
      )}
    </Fragment>
  );
}
