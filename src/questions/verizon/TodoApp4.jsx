let todos = []; // Outside variable

function TodoApp() {
  function addTodo(todo) {
    todos.push(todo);
    // No re-render! UI won't update
  }

  // This will always render the initial, empty todos
  return (
    <div>
      <button onClick={() => addTodo("New Todo")}>Add</button>
      <ul>
        {todos.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}
