import { useRef, useState } from "react";

function TodoAppKrakn(){
    const [todos,setTodos] = useState([]);
    const [inputValue,setInputValue] = useState('');


    const handleInput =(e)=>{
        setInputValue(e.target.value);
    }
    const handleAddItems = ()=>{
        if(inputValue === '') return
        setTodos(prevTodos=> [...prevTodos,inputValue]);
        setInputValue('');
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddItems();
        }
    };
    return (
        <>
        <div>
        <h1>Todo List</h1>
        <form onSubmit={handleAddItems}>
        <input onChange={handleInput} value={inputValue} 
            onKeyDown={handleKeyDown}
              type="text"
             placeholder="Add a new todo"/>
            <button type="submit">Add</button>
        </form>
            
            <ul>
                {todos.map( todo=>(<li>{todo}</li>))}
            </ul>
        </div>
        </>
    )
}
export default TodoAppKrakn;