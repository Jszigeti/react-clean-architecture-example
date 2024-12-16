/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Task } from "../../domain/model/Task";

export interface ITaskViewModelDependencies {
  getTasksUseCase: {
    execute: () => Promise<Task[]>;
  };
  refreshTasksAfterCreationUseCase: {
    execute: (name: string) => Promise<Task[]>;
  };
}

export const tasksViewModel = ({
  getTasksUseCase,
  refreshTasksAfterCreationUseCase,
}: ITaskViewModelDependencies) => {
  const [name, setName] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError(false);
      try {
        const tasks = await getTasksUseCase.execute();
        setTasks(tasks);
      } catch (error) {
        setError(true);
        if (error instanceof Error) {
          console.log("Error message:", error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [getTasksUseCase]);

  const handleAddTask = async (name: string) => {
    setLoading(true);
    setError(false);
    try {
      const updatedTasks = await refreshTasksAfterCreationUseCase.execute(name);
      setTasks(updatedTasks);
      setName("");
    } catch (error: unknown) {
      setError(true);
      if (error instanceof Error) {
        console.log("Error message:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    setName,
    tasks,
    handleAddTask,
    loading,
    error,
  };
};
