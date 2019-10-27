import { useEffect, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import queryString from "query-string";
import setAxiosHeader from "../services/setToken";

export default function useTokenParser({ history, location }) {
  const { token, setToken } = useContext(DataContext);
  const [unauthorized, setUnauthorized] = useState(false);

  const { access_token } = queryString.parse(location.search);

  useEffect(() => {
    (function tokenParser() {
      if (access_token) {
        window.localStorage.setItem("t", access_token);
        setToken(access_token);
        setAxiosHeader(access_token);
        history.push({ search: "" });
      } else if (!access_token && !token) {
        setUnauthorized(true);
      }
    })();
  }, []);
  return { unauthorized };
}
