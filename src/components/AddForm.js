import React from "react";
import { useState } from "react";
const AddForm = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handlechange = (e) => {
    setValue(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault(); // prevent form submission
    console.log(value);
    addTask(value);
  };
  return (
    <div>
      <input onChange={handlechange} type="text" value={value}></input>
      <button type="submit" onClick={handlesubmit}>
        Enter Todo
      </button>
    </div>
  );
};

export default AddForm;
