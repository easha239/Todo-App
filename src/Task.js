import React, { useState } from "react";
import Subtask from "./Subtask";
import Input from "./Input";
import Item from "./Item";

const Task = ({ task, taskIndex, tasks, setTasks }) => {
  // const [taskTitle, setTaskTitle] = useState(task.taskTitle)
  // const [subtasks, setSubtasks] = useState(task.subtask);

  const subtaskList = task.subtask.map((e, i) => (
    <Subtask
      key={e.id}
      subIndex={i}
      subtask={e}
      // subtasks={subtasks}
      // setSubtasks={setSubtasks}
      task={task}
      taskIndex={taskIndex}
      tasks={tasks}
      setTasks={setTasks}
    />
  ));

  const numberOfDone = task.subtask.filter((e) => e.isDone).length;

  return (
    <div>
      <br />
      <Item
        // subtasks={subtasks}
        // setSubtasks={setSubtasks}
        taskIndex={taskIndex}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        // taskTitle={taskTitle}
        // setTaskTitle={setTaskTitle}
        whatList={2}
        value={task.taskTitle}
        isDone={task.isDone}
      />
      <span> {task.subtask.length} </span> {subtaskList}{" "}
      <Input
        // list={subtasks}
        // setList={setSubtasks}
        placeholder={"Add subtask..."}
        whatList={1}
        task={task}
        taskIndex={taskIndex}
        // subtasks={subtasks}
        // setSubtasks={setSubtasks}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};

export default Task;
