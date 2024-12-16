import container from "../../di/ioc";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const TaskPage = () => {
  const { name, setName, handleAddTask, tasks, loading, error } =
    container.resolve("tasksViewModel");
  return (
    <div>
      <h1>Tasks List</h1>
      <TaskForm name={name} setName={setName} onAddTask={handleAddTask} />
      <TaskList tasks={tasks} loading={loading} error={error} />
    </div>
  );
};

export default TaskPage;
