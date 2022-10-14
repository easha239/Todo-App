import { Link } from "react-router-dom";

const ViewTask = ({ task, taskIndex, tasks }) => {
  console.log("Task", task);
  return (
    <Link to={`/detail/${taskIndex}`}>
      <div>{task.taskTitle}</div>
    </Link>
  );
};

export default ViewTask;
