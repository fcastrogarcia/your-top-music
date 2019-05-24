import React from "react";

export default ({ src }) => {
  return (
    <span className="overlay-nosrc">
      <p>
        Oops! no preview for this song.
        <br /> Open up in{" "}
        <a href={src.spotify} target="_blank" rel="noopener noreferrer">
          Spotify&nbsp;
          <i className="fab fa-spotify" />
        </a>
      </p>
    </span>
  );
};
