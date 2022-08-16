import React, { useState } from "react";

function ToDoForm() {
  const [input, setInput] = useState("");

  return (
    <form className="to-do form">
      <input
        type="text"
        placeholder="add a todo"
        value={input}
        name="text"
        className="todo-input"
      />
    </form>
  );
}

export default ToDoForm;
