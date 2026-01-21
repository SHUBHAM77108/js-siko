import React, { useEffect, useState } from "react";

const TimerComponents = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("setInterval executed");
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      console.log("Time stop");
      clearInterval(intervalId); //This will run when the timerComponents unmoun from ui
    };
  }, []);

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  );
};

export default TimerComponents;
