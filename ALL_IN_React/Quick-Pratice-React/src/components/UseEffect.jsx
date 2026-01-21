import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setcount] = useState(0);
  const [total, settotal] = useState(10);

  //   variation: 1
  // run on every render
  //   useEffect(() => {
  //     alert(
  //       "hi shubham this is a alert msg run every render went the page is reloade aur update",
  //     );
  //   });

  // variation: 2
  // that runs on only first render
  //   useEffect(() => {
  //     alert("I will run on only 1st render");
  //   }, []);

  //   // variation: 3
  //   useEffect(() => {
  //     alert(
  //       "I will run every time when the count is update, (way the alert run on the first time becaues the count is 0 and the 0 will insert that way the first time alert msg will)",
  //     );
  //   }, [count]);

  // variation: 4
  // this will multiple dependencies
  //   useEffect(() => {
  //     alert("I will run every time when the count & total is update.");
  //   }, [count, total]);

  //Variation: 5
  //is baarlet's add a cleanup function

  useEffect(() => {
    alert("count is updated");

    return () => {
      alert("Count is unmounted form UI");
    };
  }, [count]);

  function handledOnClick() {
    setcount(count + 1);
  }

  function handledOnClickTotal() {
    settotal(total + 10);
  }

  return (
    <div>
      <button onClick={handledOnClick}>Clicke me</button>
      <p>{count}</p>
      <button onClick={handledOnClickTotal}>Clicke me</button>
      <p>{total}</p>
    </div>
  );
};

export default UseEffect;
