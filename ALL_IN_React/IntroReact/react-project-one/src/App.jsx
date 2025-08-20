import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./components/UserCard";
import shubhamPic from "./assets/img/shubham-pic.jpg";
import amitPic from "./assets/img/amit-pic.jpg";
import kalimPic from "./assets/img/kalim.jpg";

import Counter from "./components/Counter";

function App() {
  return (
    // <div className="container">
    //   <UserCard
    //     name="shubham"
    //     desc="Hi bhai log kya chal raha hai"
    //     image={amitPic}
    //     style={{ "border-radius": "10px" }}
    //   />
    //   <UserCard
    //     name="amit"
    //     desc="hi this is a amit a web developer"
    //     image={shubhamPic}
    //     style={{ "border-radius": "10px" }}
    //   />
    //   <UserCard
    //     name="kalim"
    //     desc="aur bhia log dekha lo mera profile, sab achha hai na "
    //     image={kalimPic}
    //     style={{ "border-radius": "10px" }}
    //   />
    // </div>
    <div>
      <Counter />
    </div>
  );
}

export default App;
