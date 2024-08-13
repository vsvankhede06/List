import React from "react";

export default function Chile({ list }) {
  return (
    <div>
      <h3>List2</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
