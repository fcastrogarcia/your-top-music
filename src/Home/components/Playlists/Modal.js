import React, { Fragment } from "react";
import { BeatLoader } from "react-spinners";
import "./modal.css";
import LazyLoad from "react-lazyload";

export default ({ setIsOpen, playlistData }) => {
  const { loading, data } = playlistData;
  return (
    <Fragment>
      <div className="modal-overlay">
        <div className="md">
          {loading && <BeatLoader color={"rgba(0, 34, 128, 1)"} />}
          {!loading && (
            <Fragment>
              <p>Your new playlist's ready!</p>
              <a
                href={data.playlist_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoad placeholder={<BeatLoader />}>
                  <img src={data.image_url} alt="playlist-cover" />
                </LazyLoad>
              </a>
              <button onClick={() => setIsOpen(false)}>
                <i className="fas fa-times" />
              </button>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};
