import ViewTask from "./ViewTask";

const Home = ({ tasks }) => {
  const taskList = tasks.map((e, i) => (
    <ViewTask key={Math.random() * 1000} task={e} taskIndex={i} tasks={tasks} />
  ));
  return (
    <main className="Home">
      <h1>Home</h1>
      {taskList}
    </main>
  );
};

export default Home;
