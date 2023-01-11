import * as React from "react";
import logo from "../logo.png";
import Search from "./Search";

const NavBar = ({ data, setFilter }) => {
  return (
    <div className="navbar" position="static">
      <img className="navbar-logo" src={logo} alt="logo Rick and Morty" />
      <Search data={data} setFilter={setFilter} />
    </div>
  );
};

export default NavBar;
