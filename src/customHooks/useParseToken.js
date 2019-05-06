import { useState, useEffect, useContext } from "react";
import queryString from "query-string";
import { getNewToken } from "../services/axios";

export default function useTokenParser() {
  //Error context
  // const { isError, setIsError } = useContext(UserContext);

  //local state
  const [token, setToken] = useState("");
  // const [ refreshToken, setRefreshToken ] = useState('')

  useEffect(() => {
    async function tokenParser() {
      // if (!isError) {
      const { access_token, refresh_token } = await queryString.parse(
        window.location.search
      );
      setToken(access_token);
      //setRefreshToken(refresh_token)
    }
    //     else {
    //     const response = await getNewToken(refreshToken)
    //     .then( res => { console.log(res.data) } )
    //     .catch(error => {console.log(error)})
    //     const { access_token } = response
    //     console.log(access_token)
    //     if(access_token) {setToken(access_token) && setIsError(false)}}
    // }
    tokenParser();
  }, []);

  return token;
  // refreshToken
}
