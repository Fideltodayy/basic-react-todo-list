import React from "react";

const TodoItems = ({ entries, deleteItem }) => {
  return (
    <ul>
      <b>Items:</b>
      {entries.map(({ id, text }) => (
        <li key={id}>
          <h1>{text}</h1>
          <button
            onClick={() => {
              deleteItem(id);
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoItems;
