import { useEffect } from "react";
import queryString from "query-string";

export default function useTokenParser() {
  useEffect(() => {
    function tokenParser() {
      const { access_token, refresh_token } = queryString.parse(
        window.location.search
      );

      if (access_token) {
        localStorage.setItem("refresh_token", refresh_token);
        localStorage.setItem("token", access_token);
      }
    }

    tokenParser();
  }, []);
}
