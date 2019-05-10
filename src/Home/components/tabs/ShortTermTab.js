import React, { useContext, Fragment } from "react";
import Layout from "../Layout";
import { DataContext } from "../../../context/DataContext";

export default () => {
  const { data, type } = useContext(DataContext);
  const short_term_artists = data.artists.short_term;
  const short_term_tracks = data.tracks.short_term;
  console.log(short_term_tracks);
  return (
    <Fragment>
      <Layout
        term={type === "artists" ? short_term_artists : short_term_tracks}
      />
    </Fragment>
  );
};
