import React, { useState } from "react";

const Q7InputBox = () => {
  const [user, setUser] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <p>{user}</p>
    </div>
  );
};

export default Q7InputBox;
