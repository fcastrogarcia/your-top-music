import React, { useContext, useState } from "react";
import "../../styles/UserDisplay.css";
import { Image } from "react-bootstrap";
import { DataContext } from "../../../context/DataContext";

export default () => {
  //Context
  const { data } = useContext(DataContext);
  const { display_name, external_urls, images } = data.userData;
  const url = external_urls.spotify;

  const imageSrc = () => {
    if (images.length !== 0) {
      const imageSrc = images[0].url;
      return imageSrc;
    }
  };
  //local state
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = event => {
    event.preventDefault();
    setIsOpen(true);
    document.addEventListener("click", closeMenu);
  };
  const closeMenu = () => {
    setIsOpen(false);
    document.removeEventListener("click", closeMenu);
  };
  return (
    <div className="user-container">
      <span className="display-name" onClick={!isOpen ? showMenu : null}>
        <i className="fas fa-caret-down" id="caret" />
        <p>{display_name}</p>
        <Image src={imageSrc()} className="image" roundedCircle />
      </span>
      {isOpen && (
        <span className="user-dropdown">
          <span id="spot-account">
            <a href={url} target="blank">
              Open in Spotify
            </a>
          </span>
          <span id="sign-out">Sign Out</span>
        </span>
      )}
    </div>
  );
};
