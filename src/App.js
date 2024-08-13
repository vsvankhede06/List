import { useState } from "react";
import "./styles.css";
import Chile from "./Chile";
import Child2 from "./child2";
export default function App() {
  const [list1, setList1] = useState([
    { title: "item 1", checked: false },
    { title: "item 2", checked: false },
    { title: "item 3", checked: false },
  ]);
  const [list2, setList2] = useState([
    { title: "item A", checked: false },
    { title: "item B", checked: false },
    { title: "item C", checked: false },
  ]);
  const swapItems = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];

    updatedList1.forEach((item, index) => {
      if (item.checked) {
        const temp = updatedList1[index].title;
        updatedList1[index].title = updatedList2[index].title;
        updatedList2[index].title = temp;

        updatedList1[index].checked = false;
        setList1(updatedList1);
      }
    });
  };
  return (
    <div>
      <div className="App">
        <Child2 list={list1} setList={setList1} />
        <Chile list={list2} setList={setList2} />
      </div>
      <button onClick={swapItems}>Swap Items</button>
    </div>
  );
}
