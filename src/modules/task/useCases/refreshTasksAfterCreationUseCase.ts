import { Task } from "../domain/model/Task";

interface refreshTasksAfterCreationUseCaseDependencies {
  getTasksUseCase: {
    execute: () => Promise<Task[]>;
  };
  createTaskUseCase: {
    execute: (name: string) => Promise<void>;
  };
}

export const refreshTasksAfterCreationUseCase = ({
  getTasksUseCase,
  createTaskUseCase,
}: refreshTasksAfterCreationUseCaseDependencies) => {
  return {
    execute: async (name: string): Promise<Task[]> => {
      await createTaskUseCase.execute(name);
      return await getTasksUseCase.execute();
    },
  };
};
