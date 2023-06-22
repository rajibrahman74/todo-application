// components/SearchTodo.js
import React, { useState } from "react";

const SearchTodo = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search todos"
        className="mr-2 p-2 border rounded"
      />
      <button
        type="submit"
        className="px-[1.90rem] py-2 mt-2 bg-green-500 text-white rounded cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default SearchTodo;
