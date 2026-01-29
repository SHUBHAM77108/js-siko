import React, { useState } from "react";

const Q5StatusToggle = () => {
  const [status, setStatus] = useState("online");
  function statusChangehandle() {
    if (status == "online") {
      setStatus("offline");
    } else {
      setStatus("online");
    }
  }
  return (
    <div>
      <p>{status}</p>
      <button onClick={statusChangehandle}>change Status</button>
    </div>
  );
};

export default Q5StatusToggle;
