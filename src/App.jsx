import { useState } from 'react'
import StartStopCounter from './questions/verizon/StartStopCounter'
import './App.css'
import AccurateCounter from './questions/verizon/AccurateCounter'
import TodoApp from './questions/verizon/TodoApp'
import StartStopCounterkrakn from './questions/verizon/StartStopCounterkrakn'
import TodoAppKrakn from './questions/verizon/TodoAppKrakn'
import BuggyComponent from './questions/uidev/ErrorBoundaryDemo/BuggyComponent'
import ErrorBoundary from './questions/uidev/ErrorBoundaryDemo/ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <StartStopCounter/> */}
      {/* <AccurateCounter/> */}
      {/* <TodoApp/> */}
      {/* <StartStopCounterkrakn/> */}
      {/* <TodoAppKrakn/> */}
      <h1>React Error Boundary Demo</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </>
  )
}

export default App
