import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { endpoints } from "../services/endpoints";
import { spotify } from "../services/axios";

export default () => {
  //Context
  const { store, dispatch } = useContext(DataContext);
  const { error } = store;
  //local state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const dataFetch = async () => {
      if (!token) {
        return;
      }
      const apiRes = await Promise.all(
        endpoints.map(endpoint => spotify(token)(endpoint))
      ).catch(error => dispatch({ type: "ERROR", payload: true }));
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
    };
    dataFetch();
  }, []);
  const state = {
    isLoading
  };

  return state;
};
