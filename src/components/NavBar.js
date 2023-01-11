import * as React from "react";
import logo from "../logo.png";
import { Box } from "@mui/system";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

export default function SearchAppBar() {
  return (
    <div className="navbar" position="static">
      <img className="navbar-logo" src={logo} alt="logo Rick and Morty" />
    </div>
  );
}
