# React Clean Architecture Example

This project demonstrates a **Clean Architecture** implementation in React, adhering to the **SOLID** principles. It serves as a reference for structuring a React application with a focus on maintainability, scalability, and separation of concerns.

The application is a simple task list, allowing users to add tasks and view them. This example emphasizes modularity and clear separation of concerns, making it easy to adapt to more complex projects.

## Features

- Add a new task
- Display the list of tasks

### Task Model

The `Task` class is structured as follows:

```ts
export class Task {
  constructor(
    public id: number,
    public name: string,
    public completed: boolean = false
  ) {}
}
```

## Project Structure

The project follows a modular structure based on the Clean Architecture pattern. Below is an overview of the main folders:

```
src/
├── modules/
│   ├── task/
│   │   ├── useCases/
│   │   │   ├── createTaskUseCase.ts
│   │   │   ├── deleteTaskUseCase.ts
│   │   │   ├── getTasksUseCase.ts
│   │   │   ├── refreshTasksAfterCreationUseCase.ts
│   │   ├── di/
│   │   │   └── ioc.ts
│   │   ├── domain/
│   │   │   ├── model/
│   │   │   │   └── Task.ts
│   │   │   └── repository/
│   │   │       └── ITaskRepository.ts
│   │   ├── infrastructure/
│   │   │   ├── dataSources/
│   │   │   │   └── MockDataSource.ts
│   │   │   └── repositories/
│   │   │       └── taskRepository.ts
│   │   ├── presenter/
│   │   │   ├── components/
│   │   │   │   └── TaskForm.tsx
│   │   │   │   └── TaskList.tsx
│   │   │   ├── pages/
│   │   │   │   └── TaskPage.tsx
│   │   │   └── viewModels/
│   │   │       └── taskListViewModel.ts
│   ├── user/ (empty for now, but set up as an example)
├── components/
│   ├── ui/
│   │   ├── Button.tsx (empty for now, but set up as an example)
│   ├── layout/
│   │   ├── Header.tsx (empty for now, but set up as an example)
│   ├── common/
│   │   └── Spinner.tsx  (empty for now, but set up as an example)
├── shared/
│   ├── utils/
│   │   └── dateUtils.ts  (empty for now, but set up as an example)
│   └── types/
│       └── globalTypes.ts  (empty for now, but set up as an example)
└── App.tsx
└── index.css
└── main.tsx
```

## Dependency Injection (IoC)

The `ioc.ts` file is used to register dependencies using **Awilix** for Dependency Injection. Here's the configuration for the container:

```ts
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
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jszigeti/react-clean-architecture-example.git
   cd react-clean-architecture-example
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000`.

## Technologies Used

- React 18
- TypeScript
- Awilix (for Dependency Injection)
- Vite (for build and development)
- ESLint (for linting)

## Contributing

Feel free to open an issue or submit a pull request to contribute improvements or features.

## License

This project is licensed under the MIT License.
