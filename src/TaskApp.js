import React, { useEffect, useState } from "react";
import "./App.css";
import Task from "./Task";
import Input from "./Input";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskApp = ({ tasks, setTasks }) => {
  // const [tasks, setTasks] = useState([]);

  const taskList = tasks.map((e, i) => (
    <Task
      key={Math.random() * 1000}
      task={e}
      taskIndex={i}
      tasks={tasks}
      setTasks={setTasks}
    />
  ));

  // useEffect(() => {
  //   console.log(tasks);
  // }, [tasks, setTasks]);

  return (
    <div className="task-app">
      <header title="Todo List" />
      <div style={{ width: "100%" }}>
        <h2 style={{ textAlign: "center" }}> Enter your task </h2>
        <Input
          className="task-input"
          placeholder="Add New Task"
          style={{ width: "100%", padding: "25px" }}
          whatList={2}
          tasks={tasks}
          setTasks={setTasks}
        />
        {taskList}
      </div>
    </div>
  );
};

export default TaskApp;
