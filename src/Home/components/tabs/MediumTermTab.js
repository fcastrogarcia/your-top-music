import React, { useContext, Fragment } from "react";
import Layout from "../Layout";
import { DataContext } from "../../../context/DataContext";
import { PlayerProvider } from "../../../context/PlayerContext";

export default () => {
  const { data, type } = useContext(DataContext);
  const medium_term_artists = data.artists.medium_term;
  const medium_term_tracks = data.tracks.medium_term;

  return (
    <Fragment>
      <PlayerProvider>
        <Layout
          term={type === "artists" ? medium_term_artists : medium_term_tracks}
        />
      </PlayerProvider>
    </Fragment>
  );
};
