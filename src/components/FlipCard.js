import React from "react";
import { Typography } from "@mui/material";
import SimpleModal from "./SimpleModal";

const FlipCard = ({ data }) => {
  return (
    <div key={data.id} className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="flip-card-back">
          <div className="flip-card-back-content">
            <Typography gutterBottom>{data.name}</Typography>
            <SimpleModal data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
