import React, { Fragment, useState } from "react";
import { ScaleLoader } from "react-spinners";
import "../style.css";
import querystring from "querystring";

const LoginButton = () => {
  const [loaded, setLoaded] = useState(true);

  const handleClick = () => {
    setLoaded(!loaded);
    const redirectURL = querystring.stringify({
      returnTo: "https://focused-wright-28af53.netlify.app/home",
    });
    const redirect = (window.location = `https://spotify-project-backend.herokuapp.com/login?${redirectURL}`);
    return redirect;
  };

  return (
    <Fragment>
      <button
        className={loaded ? "button" : "button loading"}
        onClick={handleClick}
      >
        {loaded && <span className="button-text">Connect </span>}
        {loaded && <i className="fab fa-spotify" />}
        {!loaded && <ScaleLoader color={"#FFFFFF"} height={22} />}
      </button>
    </Fragment>
  );
};
export default LoginButton;
