import React from "react";
import { Typography } from "@mui/material";
import SimpleModal from "./SimpleModal";

const FlipCard = ({ d }) => {
  return (
    <div key={d.id} className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={d.image} alt={d.name} />
        </div>
        <div className="flip-card-back">
          <div className="flip-card-back-content">
            <Typography gutterBottom>{d.name}</Typography>
            <SimpleModal data={d} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
