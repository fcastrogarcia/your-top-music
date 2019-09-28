import React from "react";

export default ({ url, logout }) => (
  <span className="user-dropdown">
    <span id="spot-account">
      <a href={url} target="blank">
        Open in Spotify
      </a>
    </span>
    <span onClick={logout} style={{ cursor: "pointer" }}>
      Log out
    </span>
  </span>
);
