import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import SearchTodo from "./SearchTodo";
import Head from "next/head";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const searchTodo = (query) => {
    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
    setTodos(filteredTodos);
  };

  return (
    <div className="max-w-md mx-auto">
      <Head>
        <title>Todo App</title>
      </Head>
      <h1 className="text-center text-3xl font-bold mb-4">Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <SearchTodo onSearch={searchTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoApp;
