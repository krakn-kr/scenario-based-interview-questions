import React, { useRef, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const counterIntervalRef = useRef(null);
    const handleStartCounter = ()=>{
        if(counterIntervalRef.current !== null) return;
        counterIntervalRef.current = setInterval(()=>{
            setCount((prev)=>{return prev+1});
        },1000);
    }
    const handleStopCounter = ()=>{
        clearInterval(counterIntervalRef.current);
        counterIntervalRef.current = null;
    }
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={handleStartCounter}>Start</button>
        <h2>{count}</h2>
        <button onClick={handleStopCounter}>Stop</button>
    </div>
  )
}

export default Counter