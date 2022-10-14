import React, { useState } from "react";
import Item from "./Item";
import "./App.css";

const Subtask = ({ subtask, subIndex, task, taskIndex, tasks, setTasks }) => {
  return (
    <div className="task-app">
      <Item
        subIndex={subIndex}
        subtask={subtask}
        taskIndex={taskIndex}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        whatList={1}
        value={subtask.subtaskTitle}
        isDone={subtask.isDone}
      />{" "}
    </div>
  );
};

export default Subtask;
