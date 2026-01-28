// Q1. Basic Props ✅

// Ek Greeting component banao jo props se name receive kare aur output de:

// Hello, Shubham

// Q2. Multiple Props

// Ek UserInfo component banao jo name aur age props ke through receive kare aur screen par show kare.

import React from "react";
import Greeting from "./Q1Greeting";
import Q2UserInfo from "./Q2UserInfo";
import Q3Profile from "./Q3Profile";
import Q4Button from "./Q4Button";
import Q5Box from "./Q5Box";
import Q6Student from "./Q6Student";
import Q7Status from "./Q7Status";
import Q8Product from "./Q8Product";
import Q9Card from "./Q9Card";
import Q10ClickButton from "./Q10ClickButton";
import Q11List from "./Q11List";
import Q12DefaultProps from "./Q12DefaultProps";

function clickButton() {
  alert("This button is clicked");
}

const names = ["Aman", "Ravi", "Shubham", "Amit", "Baman"];

const PropsParent = () => {
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
      {/* <Q7Status isOnline={true} /> */}
      {/* Q8  */}
      {/* <Q8Product productName="T-shirt" price={499} inStock={true} />
      <Q8Product productName="T-shirt" price={499} inStock={false} /> */}
      {/* Q9  */}
      {/* <Q9Card>
        <h2>Welcome Shubham</h2>
        <p>This is a card component</p>
      </Q9Card>
      <Q9Card>
        <button>Click Me</button>
      </Q9Card> */}
      {/* Q10  */}
      {/* <Q10ClickButton onClickHandler={clickButton} text="click Me" /> */}
      {/* Q11  */}
      {/* <Q11List items={names} /> */}
      {/* Q12  */}
      <Q12DefaultProps /> {/*this will use defalut props in react */}
      <Q12DefaultProps name="amit" />
    </div>
  );
};

export default PropsParent;
