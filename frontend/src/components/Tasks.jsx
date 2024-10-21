const Tasks = ({ title, description, completed }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <h3>{completed ? "Completed" : "Mark as complete"}</h3>
    </div>
  );
};

export default Tasks;
