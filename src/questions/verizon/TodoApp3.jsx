import React, { useRef, useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (value === '') return;
    setTodos([...todos, value]);
    inputRef.current.value = ''; // Clear input manually
  }

  return (
    <div>
      <h1>Todo List (Uncontrolled Input)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
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
