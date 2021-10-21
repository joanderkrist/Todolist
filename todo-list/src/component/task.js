import React from "react";
import "./App.css";

const Task = ({ clearTask, id, Task }) => {
  const clearTask = () => {
    clear(id);
  };

  return (
    <div>
      <div className="tarea">
        <span>{Task}</span>
        <span onClick={clearTask}>Borrar</span>
      </div>
    </div>
  );
};

export default Task;