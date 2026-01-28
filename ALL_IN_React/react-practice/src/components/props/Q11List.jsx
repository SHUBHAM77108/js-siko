import React from "react";

const Q11List = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Q11List;
