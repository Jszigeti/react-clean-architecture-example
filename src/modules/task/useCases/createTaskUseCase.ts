import { Task } from "../domain/model/Task";
import { ITaskRepository } from "../domain/repository/ITaskRepository";

export const createTaskUseCase = ({
  taskRepository,
}: {
  taskRepository: ITaskRepository;
}) => {
  return {
    execute: async (name: string): Promise<void> => {
      const newTask = new Task(Date.now(), name);
      return taskRepository.addTask(newTask);
    },
  };
};
