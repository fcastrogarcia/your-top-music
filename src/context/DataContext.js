import React, { createContext, useMemo, useReducer } from "react";

export const DataContext = createContext();

const initialState = {
  access_token: "",
  data: {},
  type: "artists",
  token_expired: false
};
const reducer = (state, action) => {
  switch (action.type) {
    case "TOKEN":
      return {
        ...state,
        access_token: action.payload
      };
    case "DATA":
      return {
        ...state,
        data: action.payload
      };
    case "TYPE":
      return {
        ...state,
        type: action.payload
      };
    case "ERROR":
      return {
        ...state,
        token_expired: action.payload
      };
    default:
      return state;
  }
};

export function DataProvider(props) {
  const [store, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return {
      store,
      dispatch
    };
  }, [store]);

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
