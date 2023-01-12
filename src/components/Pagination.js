import React from "react";
import { Button } from "@mui/material";

const Footer = ({ data }) => {
  function handlePrev() {
    console.log("handle prev");
  }
  function handleNext() {
    console.log("handle next");
  }

  return (
    <div className="footer">
      <Button onClick={handlePrev}>Prev</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default Footer;
