import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/UserDisplay.css";
import { Image } from "react-bootstrap";
import { DataContext } from "../../../context/DataContext";
import useImageSrc from "../../../customHooks/useImageSrc";

const UserDisplay = props => {
  //Context
  const { store } = useContext(DataContext);
  const { data } = store;
  const { display_name, external_urls, images } = data.userData;
  const url = external_urls.spotify;

  //local state
  const [isOpen, setIsOpen] = useState(false);

  const src = useImageSrc(images);

  const showMenu = event => {
    event.preventDefault();
    setIsOpen(true);
    document.addEventListener("click", closeMenu);
  };
  const closeMenu = () => {
    setIsOpen(false);
    document.removeEventListener("click", closeMenu);
  };
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <div className="user-container">
      <span className="display-name" onClick={!isOpen ? showMenu : undefined}>
        <i className="fas fa-caret-down" id="caret" />
        <p>{display_name}</p>
        <Image src={src} className="image" roundedCircle />
      </span>
      {isOpen && (
        <span className="user-dropdown">
          <span id="spot-account">
            <a href={url} target="blank">
              Open in Spotify
            </a>
          </span>
          <span onClick={logout} style={{ cursor: "pointer" }}>
            Log Out
          </span>
        </span>
      )}
    </div>
  );
};

export default withRouter(UserDisplay);
