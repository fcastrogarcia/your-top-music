import React, { createContext, useMemo, useReducer } from "react";

export const PlayerContext = createContext();

export function PlayerProvider(props) {
  const initialState = {
    trackPlaying: "",
    isPlaying: false
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "PLAY":
        return {
          trackPlaying: action.payload,
          isPlaying: true
        };
      case "PAUSE":
        return {
          ...state,
          isPlaying: false
        };
      default:
        return state;
    }
  };
  const [track, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return {
      track,
      dispatch
    };
  }, [track]);
  return (
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  );
}
