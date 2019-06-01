import React, { useState, useContext, Fragment } from "react";
import useCreatePlaylist from "../../../customHooks/useCreatePlaylist";
import { DataContext } from "../../../context/DataContext";
import Modal from "./Modal";
import "./PlaylistCreator.css";

export default ({ tab }) => {
  //context
  const { store } = useContext(DataContext);
  const { type } = store;
  //local state
  const [createPlaylist, setCreatePlaylist] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  //custom hook
  const playlistData = useCreatePlaylist(
    createPlaylist,
    setCreatePlaylist,
    tab
  );
  const onClick = () => {
    setCreatePlaylist(true);
    setIsOpen(true);
  };
  return (
    <Fragment>
      {type === "tracks" && !isOpen && (
        <span className="create-playlist-label" onClick={onClick}>
          <i className="fas fa-indent" />
          <p>&nbsp;&nbsp;&nbsp;Create a Playlist</p>
        </span>
      )}
      {isOpen && <Modal setIsOpen={setIsOpen} playlistData={playlistData} />}
    </Fragment>
  );
};
