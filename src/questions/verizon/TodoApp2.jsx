function TodoApp() {
    const [todos, setTodos] = React.useState([]); // You still need state for the todo list
  
    function handleSubmit(e) {
      e.preventDefault();
      // Access the input value from the form
      const formData = new FormData(e.target);
      const value = formData.get('todo');
      if (value.trim() === '') return;
      setTodos([...todos, value]);
      e.target.reset(); // Clear the input
    }
  
    return (
      <div>
        <h1>Todo List (No useState/useRef for input)</h1>
        <form onSubmit={handleSubmit}>
          <input name="todo" placeholder="Add a new todo" />
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
  