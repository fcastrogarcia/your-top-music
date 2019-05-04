import React, { useState, useEffect } from 'react'
import queryString from 'query-string'


export default function useTokenParser() {
  const [ token, setToken ] = useState('')

  useEffect(() => {
    async function tokenParser() {
      const { access_token } = await queryString.parse(window.location.search)
      return setToken(access_token)
    }
    tokenParser();
  }, [])
  return token
}   

