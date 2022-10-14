import { useParams } from "react-router-dom";
import Task from "./Task";

const TaskDetail = ({ tasks, setTasks }) => {
  const { id } = useParams();

  console.log(id, tasks);
  return (
    <div className="taskDetail">
      <h2>Task Details</h2>
      <h4>{tasks[id].taskTitle}</h4>
      <Task
        key={Math.random() * 1000}
        task={tasks[id]}
        taskIndex={id}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};

export default TaskDetail;
