import React, { useState } from "react";

const Q2TwoCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button
        onClick={() => {
          if (count >= 1) {
            setCount(count - 1);
          }
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default Q2TwoCounter;
