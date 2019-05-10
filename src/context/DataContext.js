import React, { createContext, useMemo, useState } from "react";

export const DataContext = createContext();

export function DataProvider(props) {
  const [data, setData] = useState({});
  const [type, setType] = useState("tracks");

  const value = useMemo(() => {
    return {
      data,
      setData,
      type,
      setType
    };
  }, [data, type]);

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
