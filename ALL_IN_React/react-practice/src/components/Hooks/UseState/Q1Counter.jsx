import React, { useState } from "react";

const Q1Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default Q1Counter;
