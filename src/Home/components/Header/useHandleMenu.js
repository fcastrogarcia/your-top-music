import { useState } from "react";

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
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return {
    isOpen,
    logout,
    showMenu
  };
};
