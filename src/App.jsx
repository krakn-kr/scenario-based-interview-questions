import { useState } from 'react'
import StartStopCounter from './questions/verizon/StartStopCounter'
import './App.css'
import AccurateCounter from './questions/verizon/AccurateCounter'
import TodoApp from './questions/verizon/TodoApp'
import StartStopCounterkrakn from './questions/verizon/StartStopCounterkrakn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StartStopCounter/> */}
      {/* <AccurateCounter/> */}
      {/* <TodoApp/> */}
      <StartStopCounterkrakn/>
    </>
  )
}

export default App
