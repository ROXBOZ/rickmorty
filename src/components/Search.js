import React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";

const Search = ({ data, setFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setSearchTerm(e.target.value); // const setFilter = search bar query
    const newData = data.filter((character) => {
      return character.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFilter(newData);
  }

  return (
    <div className="search-bar">
      <Typography>Search: </Typography>
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        type="text"
        placeholder="Rick..."
      />
    </div>
  );
};

export default Search;
