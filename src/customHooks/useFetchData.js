import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { endpoints } from "../services/endpoints";
import { spotify } from "../services/axios";

export default () => {
  //Context
  const { token, dispatch } = useContext(DataContext);
  //local state
  const [isLoading, setIsLoading] = useState(true);
  //tokens
  const localToken = localStorage.getItem("token");
  const _token = localToken || token;

  useEffect(() => {
    const dataFetch = async () => {
      if (_token) {
        const apiRes = await Promise.all(
          endpoints.map(endpoint => spotify(_token)(endpoint))
        ).catch(_ => dispatch({ type: "ERROR", payload: true }));
        if (apiRes) {
          const res = apiRes.map((res, index) =>
            index === 0 ? res.data : res.data.items
          );
          dispatch({
            type: "DATA",
            payload: {
              userData: res[0],
              artists: {
                short_term: res[1],
                medium_term: res[2],
                long_term: res[3]
              },
              tracks: {
                short_term: res[4],
                medium_term: res[5],
                long_term: res[6]
              }
            }
          });
        }

        setIsLoading(false);
      }
    };
    dataFetch();
  }, [localToken, dispatch, _token]);

  const state = {
    isLoading
  };

  return state;
};
