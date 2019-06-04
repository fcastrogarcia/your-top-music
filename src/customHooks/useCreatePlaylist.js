import { useEffect, useContext, useReducer } from "react";
import { DataContext } from "../context/DataContext";
import { newPlaylist, playlistBody, handlePlaylists } from "../services/axios";

const initialState = {
  loading: false,
  data: {}
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      };
    case "DATA":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default (createPlaylist, setCreatePlaylist, tab) => {
  const [playlist, playlistDispatch] = useReducer(reducer, initialState);
  const { store, dispatch } = useContext(DataContext);

  const { data } = store;
  const user_id = data.userData.id;
  const { short_term, medium_term, long_term } = data.tracks;

  //token
  const token = localStorage.getItem("token");
  //uris array
  const short_term_uris = short_term.map(item => item.uri);
  const medium_term_uris = medium_term.map(item => item.uri);
  const long_term_uris = long_term.map(item => item.uri);
  //calls data
  const curretUris =
    tab === 1 ? long_term_uris : tab === 2 ? medium_term_uris : short_term_uris;
  const playlistData =
    tab === 1 ? playlistBody[0] : tab === 2 ? playlistBody[1] : playlistBody[2];
  const tracksBody = {
    uris: curretUris
  };

  useEffect(() => {
    const playlistCall = async () => {
      if (!createPlaylist || !token) {
        return;
      }
      if (createPlaylist) {
        playlistDispatch({ type: "LOADING", payload: true });
        const playlistsResponse = await newPlaylist(user_id, token)
          .post("/", playlistData)
          .catch(error => dispatch({ type: "ERROR", payload: true }));
        const playlist_id = playlistsResponse.data.id;

        await handlePlaylists(playlist_id, token)
          .post("/tracks", tracksBody)
          .catch(error => dispatch({ type: "ERROR", payload: true }));

        const imageCoverResponse = await handlePlaylists(playlist_id, token)
          .get("/images")
          .catch(error => dispatch({ type: "ERROR", payload: true }));
        playlistDispatch({
          type: "DATA",
          payload: {
            playlist_url: playlistsResponse.data.external_urls.spotify,
            image_url: imageCoverResponse.data[0].url
          }
        });
        playlistDispatch({ type: "LOADING", payload: false });
      }
      setCreatePlaylist(false);
    };
    playlistCall();
  }, [createPlaylist]);
  return playlist;
};
