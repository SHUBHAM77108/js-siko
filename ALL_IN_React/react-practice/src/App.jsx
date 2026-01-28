// Q1. Basic Props ✅

// Ek Greeting component banao jo props se name receive kare aur output de:

// Hello, Shubham

// Q2. Multiple Props

// Ek UserInfo component banao jo name aur age props ke through receive kare aur screen par show kare.

import React from "react";
import Greeting from "./components/props/Q1Greeting";
import Q2UserInfo from "./components/props/Q2UserInfo";
import Q3Profile from "./components/props/Q3Profile";
import Q4Button from "./components/props/Q4Button";
import Q5Box from "./components/props/Q5Box";
import Q6Student from "./components/props/Q6Student";
import Q7Status from "./components/props/Q7Status";

const App = () => {
  return (
    <div>
      {/* <Greeting greeting="Hi, Shubham" /> */}
      {/* <Q2UserInfo name="Shubham" age={25} /> */}
      {/* <Q3Profile name="Aman" city="Azamghar" /> */}

      {/* Q4  */}
      {/* <div>
        <Q4Button text="Login" />
        <Q4Button text="Signup" />
        <Q4Button text="Submit" />
      </div> */}

      {/* Q5  */}
      {/* <Q5Box color="green" text="Hi, this color box" />
      <Q5Box color="blue" text="Hi, this color box" /> */}

      {/* Q6  */}
      {/* 
      <Q6Student name="Amit" marks={95} />
      <Q6Student name="Aman" marks={85} /> */}

      {/* Q7  */}
      <Q7Status isOnline={true} />
    </div>
  );
};

export default App;
