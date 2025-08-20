import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./components/UserCard";
import shubhamPic from "./assets/img/shubham-pic.jpg";
import amitPic from "./assets/img/amit-pic.jpg";
import kalimPic from "./assets/img/kalim.jpg";

import Counter from "./components/Counter";

import Card from "./components/Card";

import Button from "./components/Button";

function App() {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  const [name, setName] = useState("");
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
    // <div>
    //   <Counter />
    // </div>
    // <div>
    //   <Card name="shubham this way we can send PROPS as Children">
    //     <h1>This way we can send any PROPS as children</h1>
    //     <p>
    //       In first CARD if we send as a PROPS the whole card child will be send.
    //     </p>
    //     <p>
    //       if we create a new props from the line the PROPS will as new and we
    //       have to give a new name and acces the children
    //     </p>
    //   </Card>
    //   <br />
    //   <Card>
    //     <p>
    //       this card contant will be send until we will not give a PROPS name to
    //       them, because this will we acces or send using the upper one PROPS,
    //       after giving a name we will have to access as a new PROPS children
    //     </p>
    //   </Card>
    //   <br />
    //   <Card name="this new PROPS we need to access this to our child">
    //     <p>this new PROPS </p>
    //   </Card>
    // </div>
    // <div>
    //   // name of handleClick is props we can also give different vrabile name
    //   and next we will send a text click me and use in our children file e.g:-
    //   Button
    //   <Button handleClick={handleClick} text="click me">
    //     <h1>{count}</h1>
    //   </Button>
    // </div>

    /* this way we can send name function to child elements // and using
      setName we can also recive any this to parant level and also using send to
      another child */
    <div>
      <Card title="Card1" name={name} setName={setName}></Card>
      <Card title="Card2" name={name} setName={setName}></Card>
    </div>
  );
}

export default App;
