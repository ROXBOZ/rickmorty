import GridCharacters from "./components/GridCharacters";

function App() {
  // let data;

  // fetch("https://rickandmortyapi.com/api/character/")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((result) => {
  //     data = result.results;
  //     console.log("result", data);
  //   })
  //   .catch((error) => {
  //     console.log("error: ", error);
  //   });

  return (
    <div className="App">
      <h1>hello</h1>
      <GridCharacters />
    </div>
  );
}

export default App;
