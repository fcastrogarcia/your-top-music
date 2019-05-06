import React, { createContext, useMemo, useState } from "react";

export const DataContext = createContext();

export function DataProvider(props) {
  const [data, setData] = useState({});

  const value = useMemo(() => {
    return {
      data,
      setData
    };
  }, [data]);

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
