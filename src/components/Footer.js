import React from "react";
import { Typography } from "@mui/material";
import Pagination from "./Pagination";

const Footer = (props) => {
  return (
    <div className="footer">
      <Pagination
        page={props.page}
        nextPage={props.nextPage}
        prevPage={props.prevPage}
      />
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
