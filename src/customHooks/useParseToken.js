import { useEffect, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import queryString from "query-string";

export default function useTokenParser(props) {
  const { setToken } = useContext(DataContext);
  const [unauthorized, setUnauthorized] = useState(false);

  const localToken = localStorage.getItem("token");
  const { access_token } = queryString.parse(props.location.search);

  useEffect(() => {
    function tokenParser() {
      if (access_token) {
        localStorage.setItem("token", access_token);
        setToken(access_token);
        props.history.push({ search: "" });
      } else if (!access_token && !localToken) {
        setUnauthorized(true);
      }
    }
    tokenParser();
  }, []);
  return { unauthorized };
}
