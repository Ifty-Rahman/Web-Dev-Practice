import React, { useState } from "react";

function App() {
  const [item, setItem] = useState([]);
  const [text, setText] = useState("");

  function handleAdd() {
    setItem([...item, text]);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
