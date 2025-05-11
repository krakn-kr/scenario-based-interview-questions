import React, { useState, useRef } from "react";

function StartStopCounter() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startCounter = () => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  };

  const stopCounter = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
    </div>
  );
}

export default StartStopCounter;
