import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import TaskApp from "./TaskApp";
import TaskDetail from "./TaskDetail";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks, setTasks]);

  return (
    <div className="App">
      <Header title={"Simple Todo App"} />
      <Nav search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/home" element={<Home tasks={tasks} />} />
        <Route
          path="/tasks"
          element={<TaskApp tasks={tasks} setTasks={setTasks} />}
        />
        <Route
          path="/detail/:id"
          element={<TaskDetail tasks={tasks} setTasks={setTasks} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
