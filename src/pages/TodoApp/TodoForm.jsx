import React, { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onSubmit(title);
      setTitle("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new todo"
        className="mr-2 p-2 border rounded"
      />
      <button
        type="submit"
        className="px-5 py-2 mt-2 bg-green-500 text-white rounded cursor-pointer"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;