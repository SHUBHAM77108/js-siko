import React, { createContext, useState } from "react";
import ChildA from "./ChildA";

const userContext = createContext();

const Parent = () => {
  const [user, setUser] = useState({ name: "Shubham" });
  return (
    <div>
      <userContext.Provider value={user}>
        <ChildA />
      </userContext.Provider>
    </div>
  );
};

export default Parent;
3;

export { userContext };
