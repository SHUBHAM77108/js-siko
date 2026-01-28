import React from "react";

const Q5Box = (props) => {
  return (
    <div className="box" style={{ backgroundColor: props.color }}>
      {props.text}
    </div>
  );
};

export default Q5Box;
