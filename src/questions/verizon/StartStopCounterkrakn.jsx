import { useRef, useState } from "react";

function StartStopCounterkrakn(){
   const [count,setCount] = useState(0);

   const counterIntervalRef = useRef(null);

   const handleStartCounter = ()=>{
    if(counterIntervalRef.current!==null) return;
    counterIntervalRef.current = setInterval(()=>{
        // setCount(count+1);
        setCount(prevCount=>prevCount+1);
        console.log(count);
    },1000);
   }
   const handleStopCounter = ()=>{
    clearInterval(counterIntervalRef.current);
    counterIntervalRef.current = null;
   }
    return (
    <div>
    <button onClick={handleStartCounter}>Start</button>
    <h1>{count}</h1>
    <button onClick={handleStopCounter}>Stop</button>
    </div>
    );
}
export default StartStopCounterkrakn;