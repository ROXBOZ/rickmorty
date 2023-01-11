import React from "react";
import { useState } from "react";

const Search = ({ data, d }) => {
  const [filter, setFilter] = useState("");

  function onChange(e) {
    e.preventDefault(); // for what ?? https://www.youtube.com/watch?v=E1cklb4aeXA
    setFilter(e.target.value); // const setFilter = search bar query
  }

  return (
    <div className="search-bar">
      Search:
      <input onChange={onChange} type="text" placeholder="Search..." />
    </div>
  );
};

export default Search;
