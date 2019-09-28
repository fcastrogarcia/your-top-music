import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import "../../styles/UserDisplay.css";
import Dropdown from "./Dropdown";
import { Image } from "react-bootstrap";
import { DataContext } from "../../../context/DataContext";
import useImageSrc from "../../../customHooks/useImageSrc";
import useHandleMenu from "./useHandleMenu";

const UserDisplay = props => {
  //Context
  const { store } = useContext(DataContext);
  const { data } = store;
  const { display_name, external_urls, images } = data.userData;
  const url = external_urls.spotify;

  const src = useImageSrc(images);
  const { isOpen, logout, showMenu } = useHandleMenu(props);

  return (
    <div className="user-container">
      <span className="display-name" onClick={!isOpen ? showMenu : undefined}>
        <i className="fas fa-caret-down" id="caret" />
        <p>{display_name}</p>
        <Image src={src} className="user-image" roundedCircle />
      </span>
      {isOpen && <Dropdown {...{ url, logout }} />}
    </div>
  );
};

export default withRouter(UserDisplay);
