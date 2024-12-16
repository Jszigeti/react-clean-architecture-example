import { ITaskRepository } from "../domain/repository/ITaskRepository";

export const deleteTaskUseCase = ({
  taskRepository,
}: {
  taskRepository: ITaskRepository;
}) => {
  return {
    execute: async (id: number): Promise<void> => {
      await taskRepository.deleteTask(id);
    },
  };
};
