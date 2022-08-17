import React, { useState } from "react";
//.map can only be used on an array[]
function ToDoList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  console.log(list);
  function remove(index) {
 const del = list.filter((element, i)=> index !== i)
 setList(del)
  }
  return (
    <>
      <form className="to-do form">
        <input
          type="text"
          placeholder="add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="text"
          className="todo-input"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setList([...list, input]);
            setInput("");
          }}
          className="todo-button"
        >
          Add todo
        </button>
      </form>
      <div>
        {list.map((item, index) => {
          return (
            <>
              <div key={index}>{item}</div>
              <button onClick={()=> remove(index)}>Delete</button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ToDoList;
