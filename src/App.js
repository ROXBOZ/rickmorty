import GridCharacters from "./components/GridCharacters";
import { Typography } from "@mui/material";

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
      <Typography variant="h1">hello</Typography>
      <Typography gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        voluptatem quisquam aut odit quibusdam officiis voluptas odio in!
        Accusamus excepturi culpa nobis expedita alias similique harum at
        aperiam corporis. Distinctio?
      </Typography>
      <GridCharacters />
    </div>
  );
}

export default App;
