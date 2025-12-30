import { useState } from "react";

function counter() {}

const App = () => {
  const [counter, setcounter] = useState(0);

  function increaseCount() {
    setcounter(counter + 1);
  }
  function decreaseCount() {
    setcounter(counter - 1);
  }
  function jumpBy5() {
    setcounter(counter + 5);
  }
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={jumpBy5}>jump by 5</button>
    </div>
  );
};
export default App;
