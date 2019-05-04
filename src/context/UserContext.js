import React, { createContext, useMemo, useState } from 'react'

export const UserContext = createContext()

export function UserProvider(props) {
  const [ userData, setUserData ] = useState()
  const [ isError, setIsError ] = useState(false)
  
  const value = useMemo(() => {
    return {
      userData,
      setUserData,
      isError,
      setIsError
    }
  }, [userData, setUserData, isError, setIsError])

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}
