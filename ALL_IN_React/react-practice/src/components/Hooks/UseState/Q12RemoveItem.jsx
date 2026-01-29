import React, { useState } from "react";

const Q12RemoveItem = () => {
  const [item, setItem] = useState(["Apple", "Banana", "Mango"]);

  function deleteItem(name) {
    setItem((prev) => prev.filter((item) => item !== name));
  }
  return (
    <ul>
      {item.map((item, idx) => (
        <li key={idx}>
          {item}
          <button onClick={() => deleteItem(item)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default Q12RemoveItem;
