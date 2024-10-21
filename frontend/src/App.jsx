import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/tasks").then(async (res) => {
        const json = await res.json();
        setTasks(json.tasks);
      });
    }, 5000);
  }, []);
  return (
    <div>
      <CreateTask />
      {tasks.map((task) => {
        return (
          <Tasks
            key={task._id}
            title={task.title}
            description={task.description}
            completed={task.completed}
          />
        );
      })}
    </div>
  );
};

export default App;
