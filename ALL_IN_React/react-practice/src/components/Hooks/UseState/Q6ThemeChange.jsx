import React, { useState } from "react";

const Q6ThemeChange = () => {
  const [light, setMode] = useState(true);
  function handleLightAndDark() {
    setMode(!light);
  }
  return (
    <div
      onClick={handleLightAndDark}
      style={{
        backgroundColor: light ? "black" : "white",
        padding: "10px",
        color: "green",
      }}
    >
      change mode
    </div>
  );
};

export default Q6ThemeChange;
