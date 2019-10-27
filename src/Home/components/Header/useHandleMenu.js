import { useState } from "react";
import setAuthToken from "../../../services/setToken";

export default props => {
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
  const logout = () => {
    window.localStorage.removeItem("t");
    setAuthToken(false);
    props.history.push("/");
  };

  return {
    isOpen,
    logout,
    showMenu
  };
};
