import React from "react";

const Q7Status = ({ isOnline }) => {
  return <div>{isOnline ? "Online" : "offline"}</div>;
};

export default Q7Status;
