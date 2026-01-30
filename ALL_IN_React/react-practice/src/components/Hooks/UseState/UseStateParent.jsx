import React, { useState } from "react";
import Q1Counter from "./Q1Counter";
import Q2TwoCounter from "./Q2TwoCounter";
import Q3ToggleText from "./Q3ToggleText";
import Q4ShowAndHide from "./Q4ShowAndHide";
import Q5StatusToggle from "./Q5StatusToggle";
import Q6ThemeChange from "./Q6ThemeChange";
import Q7InputBox from "./Q7InputBox";
import Q8CharacterCounter from "./Q8CharacterCounter";
import Q11AddItem from "./Q11AddItem";
import Q12RemoveItem from "./Q12RemoveItem";
import Q13UserProfile from "./Q13UserProfile";
import Q15ChildButton from "./Q15ChildButton";

const UseStateParent = () => {
  const [name, setName] = useState("shubham");
  function updateState() {
    setName("Ankita");
  }
  return (
    <div>
      {/* <Q1Counter /> */}
      {/* <Q2TwoCounter /> */}
      {/* <Q3ToggleText /> */}
      {/* <Q4ShowAndHide /> */}
      {/* <Q5StatusToggle /> */}
      {/* <Q6ThemeChange /> */}
      {/* <Q7InputBox /> */}
      {/* <Q8CharacterCounter /> */}
      {/* <Q11AddItem /> */}
      {/* <Q12RemoveItem /> */}
      {/* <Q13UserProfile /> */}
      Name: {name}
      <Q15ChildButton onButtonClick={updateState} />
    </div>
  );
};

export default UseStateParent;
