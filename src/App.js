import React, { useState } from "react";
import "./Todolist.js";
import Todolist from "./Todolist.js";
const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };
  return (
    <center>
      <div>
        <h3>TODOLIST APP</h3>
        <input type="text" value={task} onChange={changeHandler} />
        <button onClick={submitHandler}>ADD</button>
        <Todolist todos={todos} deleteHandler={deleteHandler} />
      </div>
    </center>
  );
};
export default App;
