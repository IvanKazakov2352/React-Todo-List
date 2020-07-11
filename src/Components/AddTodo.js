import React, { useState } from "react";

function AddTodo({onCreate}) {
  const [value, setValue] = useState("");

  function submitTodo(event) {
    event.preventDefault()

    if(value.trim()) {
        onCreate(value)
        setValue("")
    }
  }

  return (
    <form onSubmit={submitTodo}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="input"
      />
      <button className="button" type="submit">
        Add todo
      </button>
    </form>
  );
}

export default AddTodo;
