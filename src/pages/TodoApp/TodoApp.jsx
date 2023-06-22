

import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import SearchTodo from "./SearchTodo";
import Head from "next/head";

const TodoApp = () => {
  const [originalTodos, setOriginalTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
    };
    setOriginalTodos([...originalTodos, newTodo]);
    setFilteredTodos([...originalTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = originalTodos.filter((todo) => todo.id !== id);
    setOriginalTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const searchTodo = (query) => {
    const filteredTodos = originalTodos.filter((todo) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTodos(filteredTodos);
  };

  return (
    <div className="max-w-md mx-auto">
      <Head>
        <title>Todo App</title>
      </Head>
      <h1 className="text-center text-3xl font-bold mb-4">Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <SearchTodo onSearch={searchTodo} />
      <TodoList todos={filteredTodos} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoApp;
