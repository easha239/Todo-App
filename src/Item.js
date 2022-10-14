import React, { useState } from "react";

const Item = ({
  subIndex,
  taskIndex,

  // task,
  // subtask,
  whatList,

  value,
  isDone,
  tasks,
  setTasks,
}) => {
  const [inputText, setInputText] = useState(value);
  // const [checkStatus, setCheckStatus] = useState(isDone);

  const handleDel = () => {
    const tasksCopy = [...tasks];
    tasksCopy[taskIndex].subtask.splice(subIndex, 1);
    setTasks(tasksCopy);
    
  };

  const handleDone = () => {
    const tasksCopy = [...tasks];
    tasksCopy[taskIndex].subtask[subIndex].isDone = true;
    setTasks(tasksCopy);
  }

  const editInput = (e) => {
    const newInputVal = e.target.value;
    setInputText(newInputVal);
  };

  const changeDoneStatus = () => {
    const tasksCopy = [...tasks];
    let statusCopy = false;
    if (whatList === 1) {
      //update subtask
      statusCopy = tasksCopy[taskIndex].subtask[subIndex].isDone;
      tasksCopy[taskIndex].subtask[subIndex].isDone = !statusCopy;
    } else {
      //updaet task
      statusCopy = tasksCopy[taskIndex].isDone;
      tasksCopy[taskIndex].isDone = !statusCopy;
    }

    // setCheckStatus(!statusCopy);
    setTasks(tasksCopy);
  };

  const update = (e) => {
    if (e.keyCode === 13) {
      const tasksCopy = [...tasks];
      if (whatList === 1) {
        //update subtask
        tasksCopy[taskIndex].subtask[subIndex].subtaskTitle = inputText;
      } else {
        //update task
        tasksCopy[taskIndex].taskTitle = inputText;
      }

      setTasks(tasksCopy);
    }
  };

  const style = {
    textDecorationLine: isDone ? "line-through" : "none",
    textAlign: "ce",
  };

  return (
    <div>
     
      <input
        style={style}
        value={inputText}
        onChange={editInput}
        onKeyDown={update}
      />
      {whatList === 1 ? <button onClick={handleDone}> done </button> : ""}
      {whatList === 1 ? <button onClick={handleDel}> delete </button> : ""}
    </div>
  );
};

export default Item;
