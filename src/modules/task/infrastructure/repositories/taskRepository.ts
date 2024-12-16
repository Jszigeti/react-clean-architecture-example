import { Task } from "../../domain/model/Task";
import { ITaskRepository } from "../../domain/repository/ITaskRepository";

export const taskRepository = ({
  dataSource,
}: {
  dataSource: ITaskRepository;
}) => {
  return {
    getTasks: async (): Promise<Task[]> => {
      return await dataSource.getTasks();
    },
    addTask: async (task: Task): Promise<void> => {
      await dataSource.addTask(task);
    },
    deleteTask: async (id: number): Promise<void> => {
      await dataSource.deleteTask(id);
    },
  };
};
