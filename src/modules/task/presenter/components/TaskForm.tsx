interface TaskFormProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  onAddTask: (name: string) => Promise<void>;
}

const TaskForm = ({ name, setName, onAddTask }: TaskFormProps) => {
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task name"
      />
      <button onClick={() => onAddTask(name)}>Add Task</button>
    </>
  );
};

export default TaskForm;
