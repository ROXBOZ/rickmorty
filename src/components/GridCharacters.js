import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Dashboard from "./Dashboard";

const GridCharacters = () => {
  // fetch data
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result.results);
        console.log("data", data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);
  // Handle Modal

  const handleModal = () => {
    console.log("yolo");
  };

  return (
    <div className="character-grid-container">
      {data &&
        data.map((d) => {
          return (
            <div key={d.id} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={d.image} alt={d.name} />
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-content">
                    <Typography>{d.name}</Typography>
                    <Button variant="contained" onClick={handleModal}>
                      learn more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GridCharacters;
