import React, { useState } from "react";
import Q1Counter from "./Q1Counter";
import Q2TwoCounter from "./Q2TwoCounter";
import Q3ToggleText from "./Q3ToggleText";
import Q4ShowAndHide from "./Q4ShowAndHide";
import Q5StatusToggle from "./Q5StatusToggle";
import Q6ThemeChange from "./Q6ThemeChange";
import Q7InputBox from "./Q7InputBox";

const UseStateParent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <Q1Counter /> */}
      {/* <Q2TwoCounter /> */}
      {/* <Q3ToggleText /> */}
      {/* <Q4ShowAndHide /> */}
      {/* <Q5StatusToggle /> */}
      {/* <Q6ThemeChange /> */}
      <Q7InputBox />
    </div>
  );
};

export default UseStateParent;
