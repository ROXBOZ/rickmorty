import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const Pagination = () => {
  return (
    <div className="pagination-banner">
      <ButtonGroup variant="contained" color="secondary">
        <Button onClick={prevPage}>Prev</Button>
        <Button onClick={nextPage}>Next</Button>
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
