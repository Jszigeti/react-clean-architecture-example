import { Task } from "../domain/model/Task";
import { ITaskRepository } from "../domain/repository/ITaskRepository";

export const getTasksUseCase = ({
  taskRepository,
}: {
  taskRepository: ITaskRepository;
}) => {
  return {
    execute: async (): Promise<Task[]> => {
      return taskRepository.getTasks();
    },
  };
};
