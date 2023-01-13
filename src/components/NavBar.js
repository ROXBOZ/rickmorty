import { Typography } from "@mui/material";
import * as React from "react";
import logo from "../assets/logo.png";

const NavBar = ({ data, filter, setFilter, getInput }) => {
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
      <div className="search-bar">
        <Typography>Search: </Typography>
        <input
          onChange={(e) => {
            getInput(e.target.value);
          }}
          type="text"
          placeholder="Rick..."
        />
      </div>
    </div>
  );
};

export default NavBar;
