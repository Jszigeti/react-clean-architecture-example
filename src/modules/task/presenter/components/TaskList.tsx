import { Task } from "../../domain/model/Task";

interface TaskListProps {
  tasks: Task[];
  loading: boolean;
  error: boolean;
}

const TaskList = ({ tasks, loading, error }: TaskListProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <ul>
      {tasks.map((task: Task) => (
        <li key={task.id}>
          <p>
            {task.name} - Status: {task.completed ? "Done" : "To do"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
