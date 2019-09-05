import { useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import queryString from "query-string";

export default function useTokenParser(props) {
  const { dispatch } = useContext(DataContext);

  useEffect(() => {
    function tokenParser() {
      const { access_token } = queryString.parse(props.location.search);

      if (access_token) {
        localStorage.setItem("token", access_token);
        dispatch({ type: "TOKEN", payload: access_token });
        props.history.push({ search: "" });
      }
    }

    tokenParser();
  }, [dispatch, props]);
}
