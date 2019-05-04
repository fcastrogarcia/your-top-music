import React, { createContext, useMemo, useReducer } from 'react'

export const ArtistsContext = createContext()

const initialState = {
  oneMonth: [],
  sixMonths: [],
  allTime: []
}

const reducer = ( state, action ) => {
  switch (action.type) {
    case 'SHORT_TERM':
      return { ...state, oneMonth: [...action.payload] };
    case 'MEDIUM_TERM':
      return { ...state, sixMonths: [...action.payload] };
    case 'LONG_TERM':
      return { ...state, allTime: [...action.payload] };    
    default:
    return state  
  }
}

export function ArtistsProvider(props) {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    return {
      artistsState: state,
      artistsDispatch: dispatch
    }
  }, [state, dispatch])
  
  return <ArtistsContext.Provider value={value}>{props.children}</ArtistsContext.Provider>;

} 