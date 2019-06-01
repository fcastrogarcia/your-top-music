import React, { useContext, Fragment } from "react";
import Layout from "../Layout";
import { DataContext } from "../../../context/DataContext";
import { PlayerProvider } from "../../../context/PlayerContext";

export default () => {
  const { store } = useContext(DataContext);
  const { data, type } = store;
  const short_term_artists = data.artists.short_term;
  const short_term_tracks = data.tracks.short_term;
  return (
    <Fragment>
      <PlayerProvider>
        <Layout
          term={type === "artists" ? short_term_artists : short_term_tracks}
        />
      </PlayerProvider>
    </Fragment>
  );
};
