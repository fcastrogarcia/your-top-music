import React from "react";
import LoginButton from "./components/LoginButton";
import "./style.css";

const Login = () => (
  <div className="login-container">
    <div className="top">
      <span role="img" aria-label="emojis" className="emojis">
        🤘🎧🎵
      </span>
      <p className="text">Find out who your top artists and songs are.</p>
    </div>
    <div className="bottom">
      <LoginButton />
    </div>
  </div>
);

export default Login;
