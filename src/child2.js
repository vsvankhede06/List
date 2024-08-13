import React from "react";

export default function List1Component({ list, setList }) {
  const handleOnChange = (index) => {
    const updatedList = [...list];
    updatedList[index].checked = !updatedList[index].checked;
    setList(updatedList);
  };

  return (
    <div>
      <h3>List1</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleOnChange(index)}
            />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
