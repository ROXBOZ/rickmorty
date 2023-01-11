import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import SimpleModal from "./SimpleModal";

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
                    <Typography gutterBottom>{d.name}</Typography>
                    <SimpleModal data={(data, d)} />
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
