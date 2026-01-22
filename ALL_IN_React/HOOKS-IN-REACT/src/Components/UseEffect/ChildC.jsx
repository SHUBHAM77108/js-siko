import React, { useContext } from "react";
import { userContext } from "./Parent";

const ChildC = () => {
  const user = useContext(userContext);

  return <div>Data: {user.name}</div>;
};

export default ChildC;
