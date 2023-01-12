import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const PagesBanner = () => {
  function handlePrev() {
    console.log("handlePrev");
  }
  function handleNext() {
    console.log("handlenext");
  }
  return (
    <div className="pagination-banner">
      <ButtonGroup variant="contained" color="secondary">
        <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </ButtonGroup>
    </div>
  );
};

export default PagesBanner;
