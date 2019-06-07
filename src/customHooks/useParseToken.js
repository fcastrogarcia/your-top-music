import { useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import queryString from "query-string";

export default function useTokenParser() {
  const { dispatch } = useContext(DataContext);

  useEffect(() => {
    function tokenParser() {
      const { access_token } = queryString.parse(window.location.search);

      if (access_token) {
        dispatch({ type: "TOKEN", payload: access_token });
      }
    }

    tokenParser();
  }, [dispatch]);
}
