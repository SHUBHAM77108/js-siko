import React, { createContext, useState } from "react";
import ChildA from "./ChildA";

// const userContext = createContext();

const ThemeContext = createContext();

const Parent = () => {
  // const [user, setUser] = useState({ name: "Shubham" });

  const [theme, setTheme] = useState("light");
  return (
    // <div>
    //   <userContext.Provider value={user}>
    //     <ChildA />
    //   </userContext.Provider>
    // </div>

    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        id="container"
        style={{ backgroundColor: theme === "light" ? "bwige" : "black" }}
      >
        <ChildA />
      </div>
    </ThemeContext.Provider>
  );
};

export default Parent;
3;

// export { userContext };
export { ThemeContext };
