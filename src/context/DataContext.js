import React, { createContext, useMemo, useState } from "react";

export const DataContext = createContext();

export function DataProvider(props) {
  const [data, setData] = useState({});
  const [tab, setTab] = useState(1);

  const value = useMemo(() => {
    return {
      data,
      setData,
      tab,
      setTab
    };
  }, [data, tab]);

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
