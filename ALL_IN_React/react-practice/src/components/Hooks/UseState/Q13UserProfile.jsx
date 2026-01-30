import React, { useState } from "react";

const Q13UserProfile = () => {
  const [user, setUser] = useState({ name: "shubham", age: "25" });
  function updateUser() {
    setUser({ ...user, name: "Baman", age: "26" });
  }
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>age: {user.age}</p>
      <button onClick={updateUser}>change value</button>
    </div>
  );
};

export default Q13UserProfile;
