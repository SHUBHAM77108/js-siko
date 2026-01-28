import React, { useEffect, useState } from "react";

const MultiEffectComponents = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSecond] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // this will when the count will be change

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("SetInterval Started");
      setSecond((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      console.log("remove interval");
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h1>Seconds: {seconds}</h1>
    </div>
  );
};

export default MultiEffectComponents;
