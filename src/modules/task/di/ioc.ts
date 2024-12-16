import { createContainer, asClass, asFunction } from "awilix";
import { MockDataSource } from "../infrastructure/dataSources/MockDataSource";
import { getTasksUseCase } from "../useCases/getTasksUseCase";
import { createTaskUseCase } from "../useCases/createTaskUseCase";
import { taskRepository } from "../infrastructure/repositories/taskRepository";
import { tasksViewModel } from "../presenter/viewModels/tasksViewModel";
import { refreshTasksAfterCreationUseCase } from "../useCases/refreshTasksAfterCreationUseCase";

const container = createContainer();

container.register({
  // Data source
  dataSource: asClass(MockDataSource).singleton(),

  // Repository
  taskRepository: asFunction(taskRepository),

  // Use case
  getTasksUseCase: asFunction(getTasksUseCase).singleton(),
  createTaskUseCase: asFunction(createTaskUseCase),
  refreshTasksAfterCreationUseCase: asFunction(
    refreshTasksAfterCreationUseCase
  ),

  // ViewModel
  tasksViewModel: asFunction(tasksViewModel),
});

export default container;
