import * as React from "react";
import logo from "../assets/logo.png";
import Search from "./Search";

const NavBar = ({ data, filter, setFilter }) => {
  function resetFilter() {
    window.location.reload(true);
  }

  return (
    <div className="navbar" position="static">
      <img
        onClick={resetFilter}
        className="navbar-logo"
        src={logo}
        alt="logo Rick and Morty"
      />
      <Search data={data} setFilter={setFilter} />
    </div>
  );
};

export default NavBar;
