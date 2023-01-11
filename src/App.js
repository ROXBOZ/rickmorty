import NavBar from "./components/NavBar";
import GridCharacters from "./components/GridCharacters";
import { useState } from "react";
import { useEffect } from "react";

function App() {
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
    <div className="App">
      <NavBar data={data} />
      <GridCharacters data={data} />
    </div>
  );
}

export default App;
