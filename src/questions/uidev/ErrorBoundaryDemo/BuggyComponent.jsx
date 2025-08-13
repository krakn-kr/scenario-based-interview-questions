import React, { useState } from "react";

function BuggyComponent() {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    // Deliberately throw an error
    throw new Error("I crashed!");
  }

  return (
    <div>
      <h3>This component is safe... for now.</h3>
      <button onClick={() => setThrowError(true)}>Crash me!</button>
    </div>
  );
}

export default BuggyComponent;
