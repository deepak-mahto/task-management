const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div>
            <h3>{task.title}</h3>
            <h3>{task.description}</h3>
            <h3>{task.completed ? "Completed" : "Mark as complete"}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
