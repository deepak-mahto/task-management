import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks").then(async (res) => {
      const json = await res.json();
      setTasks(json.tasks);
    });
  }, [tasks]);
  return (
    <div>
      <CreateTask />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
