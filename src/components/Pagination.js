import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const Pagination = (props) => {
  return (
    <div className="pagination-banner">
      <ButtonGroup variant="contained" color="secondary">
        <Button onClick={props.prevPage}>Prev</Button>
        <Button onClick={props.nextPage}>Next</Button>
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
