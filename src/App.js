import NavBar from "./components/NavBar";
import GridCharacters from "./components/GridCharacters";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
    if (page >= 42) {
      window.location.reload(true);
    }
  };

  const prevPage = () => {
    setPage(page - 1);
    if (page <= 1) {
      window.location.reload(true);
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
      <NavBar data={data} setFilter={setFilter} />
      <GridCharacters
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
        data={data}
        filter={filter}
      />
      <Footer page={page} nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}

export default App;
