import React, { Fragment, useContext } from "react";
import Header from "./components/Header";
import useFetchData from "../customHooks/useFetchData";
import useTokenParser from "../customHooks/useParseToken";
import { DataContext } from "../context/DataContext";
import BarLoader from "./components/LoadingSpinner";
import NavBar from "./components/NavBar";
import ShortTermTab from "./components/tabs/ShortTermTab";
import MediumTermTab from "./components/tabs/MediumTermTab";
import LongTermTab from "./components/tabs/LongTermTab";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Home() {
  //context
  const { tab } = useContext(DataContext);

  //custom hooks
  useTokenParser();
  const { isLoading } = useFetchData();

  return (
    <Fragment>
      {isLoading && <BarLoader />}
      {!isLoading && (
        <Fragment>
          <Header />
          <NavBar />
          {tab === 1 && <LongTermTab />}
          {tab === 2 && <MediumTermTab />}
          {tab === 3 && <ShortTermTab />}
        </Fragment>
      )}
    </Fragment>
  );
}
