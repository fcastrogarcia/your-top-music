import { useEffect, useContext, useReducer } from "react";
import { DataContext } from "../context/DataContext";
import { playlistBody } from "../services/axios";
import axios from "axios";

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

const loading = state => ({
  type: "LOADING",
  payload: state
});
const _error = { type: "ERROR", payload: true };

export default (createPlaylist, setCreatePlaylist, tab) => {
  const [playlist, playlistDispatch] = useReducer(reducer, initialState);
  const { store, dispatch } = useContext(DataContext);

  const { data } = store;
  const user_id = data.userData.id;
  const { short_term, medium_term, long_term } = data.tracks;
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
      if (createPlaylist) {
        playlistDispatch(loading(true));

        const playlistsResponse = await axios
          .post(
            `https://api.spotify.com/v1/users/${user_id}/playlists`,
            playlistData
          )
          .catch(() => dispatch(_error));
        const playlist_id = playlistsResponse.data.id;

        await axios
          .post(
            `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
            tracksBody
          )
          .catch(() => dispatch(_error));

        const imageCoverResponse = await axios
          .get(`https://api.spotify.com/v1/playlists/${playlist_id}/images`)
          .catch(() => dispatch(_error));
        //set playlist data
        playlistDispatch({
          type: "DATA",
          payload: {
            playlist_url: playlistsResponse.data.external_urls.spotify,
            image_url: imageCoverResponse.data[0].url
          }
        });
        //turn spinner off
        playlistDispatch(loading(false));
      }
      setCreatePlaylist(false);
    };
    playlistCall();
  }, [createPlaylist]);
  return playlist;
};
