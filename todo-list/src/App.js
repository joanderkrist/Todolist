import React, { useState } from "react";
import "./App.css";
import Task from "./component/task";
import TaskForm from "./component/taskform";

function App() {
  const [listTask, setListTask] = useState([]);

  const newTask = (Task) => {
    setListTask([Task, ...listTask]);
  };

  const clear = (id) => {
    const listFilter = listTask.filter((e, index) => index !== id);
    setListTask(listFilter);
  };

  return (
    <div className="App">
      <TaskForm newTask={newTask} />

      <div className="lista">
        {listTask.map((e, index) => (
          <Task key={index} tarea={e} borrar={clear} id={index} />
        ))}
      </div>
    </div>
  );
}

export default App;