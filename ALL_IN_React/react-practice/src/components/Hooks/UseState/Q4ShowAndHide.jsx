import React, { useState } from "react";

const Q4ShowAndHide = () => {
  const [show, setShow] = useState(true);

  function ShowAndHideToggle() {
    setShow(!show);
  }
  return (
    <div>
      {show && <p>Hi, shubham</p>}
      <button onClick={ShowAndHideToggle}>Click Me to hide or unhide</button>
    </div>
  );
};

export default Q4ShowAndHide;
