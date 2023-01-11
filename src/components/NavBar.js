import * as React from "react";
import logo from "../logo.png";
import Search from "./Search";

const NavBar = () => {
  return (
    <div className="navbar" position="static">
      <img className="navbar-logo" src={logo} alt="logo Rick and Morty" />
      <Search />
    </div>
  );
};

export default NavBar;
