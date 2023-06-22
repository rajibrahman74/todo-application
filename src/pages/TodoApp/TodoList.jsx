import React from 'react';

const TodoList = ({ todos, onDelete }) => {
  if (!todos) {
    return null; 
  }
  
  return (
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center mb-2 p-2 rounded bg-gray-200 shadow"
        >
          <span>{todo.title}</span>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-1 bg-red-500 text-white rounded cursor-pointer"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;