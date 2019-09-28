import React from "react";
import "../../styles/Header.css";
import UserDisplay from "./UserDisplay";
import useMouseMoveShadow from "../../../customHooks/useMouseMoveShadow";

export default function Header() {
  const { emojisRef } = useMouseMoveShadow();

  return (
    <header>
      <span
        ref={emojisRef}
        className="header-emojis"
        role="img"
        aria-label="emojis"
      >
        🤘🎧🎵
      </span>
      <UserDisplay />
    </header>
  );
}
