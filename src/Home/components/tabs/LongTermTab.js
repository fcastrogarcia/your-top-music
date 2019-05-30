import React, { useContext, Fragment } from "react";
import Layout from "../Layout";
import { DataContext } from "../../../context/DataContext";
import { PlayerProvider } from "../../../context/PlayerContext";

export default () => {
  const { data, type } = useContext(DataContext);
  const long_term_artists = data.artists.long_term;
  const long_term_tracks = data.tracks.long_term;
  return (
    <Fragment>
      <PlayerProvider>
        <Layout
          term={type === "artists" ? long_term_artists : long_term_tracks}
        />
      </PlayerProvider>
    </Fragment>
  );
};
