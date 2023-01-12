import React from "react";
import { Typography } from "@mui/material";
import Pagination from "./Pagination";

const Footer = () => {
  return (
    <div className="footer">
      <Pagination />
      <Typography className="footer-github-line">
        <span>Roxanne Borloz&nbsp;</span>
        <a href="https://github.com/ROXBOZ">
          <i className="devicon-github-original"></i>
        </a>
      </Typography>
    </div>
  );
};

export default Footer;
