import NavBar from "./components/NavBar";
import GridCharacters from "./components/GridCharacters";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // fetch data
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(null);
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
      <NavBar data={data} setFilter={setFilter} />
      <GridCharacters data={data} filter={filter} />
    </div>
  );
}

export default App;
