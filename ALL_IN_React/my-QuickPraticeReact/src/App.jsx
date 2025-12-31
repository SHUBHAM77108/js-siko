import { useState } from "react";

function counter() {}

const App = () => {
  const [counter, setcounter] = useState(10);

  function increaseCount() {
    setcounter((prave) => prave + 1);
    setcounter((prave) => prave + 1);
    setcounter((prave) => prave + 1);
  }
  function decreaseCount() {
    setcounter(counter - 1);
  }
  function jumpBy5() {
    setcounter(counter + 5);
  }
  return (
    <div className="text-white p-5">
      <div className="w-3xs h-28 text-8xl text-center p-5 bg-amber-800 font-bold">
        {counter}
      </div>
      <button
        className="w-30 h-20 pr-2 bg-amber-500 font-bold"
        onClick={increaseCount}
      >
        increase
      </button>
      <button
        className="w-30 h-20 pr-2 bg-amber-500 font-bold"
        onClick={decreaseCount}
      >
        decrease
      </button>
      <button className="w-30 h-20 bg-amber-500 font-bold" onClick={jumpBy5}>
        jump by 5
      </button>
    </div>
  );
};
export default App;
