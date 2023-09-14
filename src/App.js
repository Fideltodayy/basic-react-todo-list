import React, { useState } from "react";
import TodoItems from "./components/TodoItems";
import AddForm from "./components/AddForm";
export default function App() {
  const [toDoList, setToDoList] = useState([
    { text: "Buy Sugar", id: 24846644 },
    { text: "Eat Carrots", id: 34981614 },
  ]);

  function deleteItem(id) {
    setToDoList((toDoList) => toDoList.filter((rec) => id !== rec.id));
  }

  const addTask = (userInput) => {
    const newValue = { text: userInput, id: Date.now() };
    setToDoList((toDoList) => [newValue, ...toDoList]);
  };

  return (
    <>
      <div className="mainbody">
        <div className="head">
          <AddForm addTask={addTask} />
        </div>
        <div className="thorax">
          <TodoItems entries={toDoList} deleteItem={deleteItem} />
        </div>
      </div>
      <footer className="abdomen">Made with love by Fideltodayy</footer>
    </>
  );
}
