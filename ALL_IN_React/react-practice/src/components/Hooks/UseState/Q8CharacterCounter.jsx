import React, { useState } from "react";

const Q8CharacterCounter = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text.length}</p>
    </div>
  );
};

export default Q8CharacterCounter;
