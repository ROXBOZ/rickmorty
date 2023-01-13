import NavBar from "./components/NavBar";
import GridCharacters from "./components/GridCharacters";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filterTerm, setFilterTerm] = useState(null);
  const [, setError] = useState(null);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
    if (page == 5) {
      window.location.reload(true);
    }
  };

  const prevPage = () => {
    setPage(page - 1);
    if (page <= 1) {
      window.location.reload(true);
    }
  };

  const getInput = (text) => {
    console.log("text", text);
    setFilterTerm(text);
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
      <NavBar getInput={getInput} />
      <GridCharacters data={data} filterTerm={filterTerm} />
      <Footer page={page} nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}

export default App;
