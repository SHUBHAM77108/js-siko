import React, { useState } from "react";

const Q3ToggleText = () => {
  const [user, setUser] = useState("login");
  function LoginAndLogout() {
    if (user == "login") {
      setUser("logout");
    } else {
      setUser("login");
    }
  }
  return <button onClick={LoginAndLogout}>{user}</button>;
};

export default Q3ToggleText;
