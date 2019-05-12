import React, { Fragment, useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import "../../styles/Dropdown.css";

export default () => {
  //context
  const { type, setType } = useContext(DataContext);
  // local state
  // const [isOpen, setIsOpen] = useState(false);

  // const showMenu = event => {
  //   event.preventDefault();
  //   setIsOpen(true);
  //   document.addEventListener("click", closeMenu);
  // };
  // const closeMenu = () => {
  //   setIsOpen(false);
  //   document.removeEventListener("click", closeMenu);
  // };
  const typeToggler = () => {
    type === "artists" ? setType("tracks") : setType("artists");
  };

  return (
    <Fragment>
      <div className="selector-container">
        <span className="selector" onClick={typeToggler}>
          <span>
            <i className="fas fa-sort" id="caret" />
          </span>
          <p>
            Top
            <div className="c--anim-btn">
              <span
                className={
                  type === "tracks" ? "c-anim-btn toggle" : "c-anim-btn"
                }
              >
                artists
              </span>
              <span> tracks</span>
            </div>
          </p>
        </span>
        {/* {isOpen && (
          <span className="dropdown">
            <ul>
              <li onClick={typeToggler}>
                {type === "artists" ? "Tracks" : "Artists"}
              </li>
              <li id="disabled">Recently Played</li>
            </ul>
          </span>
        )} */}
      </div>
    </Fragment>
  );
};
