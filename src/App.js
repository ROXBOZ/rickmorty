import NavBar from "./components/NavBar";
import GridCharacters from "./components/GridCharacters";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(null);
  const [error, setError] = useState(null);
  let page = 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.log("Catch: ", error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar data={data} setFilter={setFilter} />
      <GridCharacters data={data} filter={filter} />
      <Pagination data={data} />
      <Footer />
    </div>
  );
}

export default App;
