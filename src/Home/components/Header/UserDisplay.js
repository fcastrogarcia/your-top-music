import React, { useContext, useState } from "react";
import "../../styles/UserDisplay.css";
import { Image } from "react-bootstrap";
import { DataContext } from "../../../context/DataContext";

export default () => {
  //Context
  const { data } = useContext(DataContext);
  console.log(data);
  const { display_name, external_urls, images } = data.userData;
  const url = external_urls.spotify;

  const imageCaca = () => {
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
    <div className="user">
      <span className="display-name" onClick={!isOpen ? showMenu : null}>
        <i className="fas fa-caret-down" id="caret" />
        <p>{display_name}</p>
        {isOpen && (
          <span className="user-dropdown">
            <ul>
              <li>Open in Spotify</li>
              <li>Sign Out</li>
            </ul>
          </span>
        )}
      </span>
      <Image src={imageCaca()} className="image" roundedCircle />
    </div>
  );
};
