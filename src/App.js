import NavBar from "./components/NavBar";
import GridCharacters from "./components/GridCharacters";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(2);
  const nextPage = () => {
    setPage(page + 1);
    if (page > 42) {
      console.log("page 43 doesn't exist");
    }
  };

  const prevPage = () => {
    setPage(page - 1);
    if (page - 1 < 1) {
      console.log("-1 does not exist");
    }
  };

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
  }, [page]);

  return (
    <div className="App">
      <button onClick={prevPage}>prev</button>
      <button onClick={nextPage}>next</button>

      <NavBar data={data} setFilter={setFilter} />
      <GridCharacters data={data} filter={filter} />
      <Footer />
    </div>
  );
}

export default App;
