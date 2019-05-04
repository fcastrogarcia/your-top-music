// import React, { useState, createContext, useMemo, useEffect } from 'react'
// import queryString from 'query-string'

// export const AuthContext = createContext();

// export function AuthProvider(props) {
//   const [ token, setToken ] = useState('')
  
//   useEffect(() => {
//     async function tokenParser() {
//       const { access_token } = await queryString.parse(window.location.search)
//       return setToken(access_token)
//     }
//     tokenParser();
//   }, [])
  
//   const value = useMemo(() => {
//     return {
//       token,
//     }
//   }, [token])

//   return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
// }

//Borrar este archivo