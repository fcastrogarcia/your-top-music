import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./Login/index";
import Home from "./Home/index";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/connect" />} />
      <Route exact path="/connect" component={Login} />
      <DataProvider>
        <Route exact path="/home" component={Home} />
      </DataProvider>
    </Switch>
  );
}

export default App;
