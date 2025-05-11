import React, { useState, useRef } from "react";

function AccurateCounter() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  const startCounter = () => {
    if (running) return;
    setRunning(true);
    startTimeRef.current = Date.now() - count * 1000;
    intervalRef.current = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
      setCount(elapsedSeconds);
    }, 200); // Short interval for responsiveness
  };

  const stopCounter = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
    </div>
  );
}

export default AccurateCounter;
