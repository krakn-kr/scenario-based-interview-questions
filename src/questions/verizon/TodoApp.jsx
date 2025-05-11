import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  // Handle form submission to add a new todo
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === '') return; // Prevent empty todos
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
