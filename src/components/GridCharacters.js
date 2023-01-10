import { useEffect, useState } from "react";

const GridCharacters = () => {
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
    <div>
      {data &&
        data.map((d) => {
          return <p>{d.name}</p>;
        })}
    </div>
  );
};

export default GridCharacters;
