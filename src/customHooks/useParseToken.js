import { useEffect, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import queryString from "query-string";

export default function useTokenParser(props) {
  const { dispatch } = useContext(DataContext);
  const [unauthorized, setUnauthorized] = useState(false);

  useEffect(() => {
    function tokenParser() {
      const { access_token } = queryString.parse(props.location.search);
      const localToken = localStorage.getItem("token");

      if (access_token) {
        localStorage.setItem("token", access_token);
        dispatch({ type: "TOKEN", payload: access_token });
        props.history.push({ search: "" });
      } else if (!access_token && !localToken) {
        setUnauthorized(true);
      }
    }

    tokenParser();
  }, []);
  return { unauthorized };
}
