import { Task } from "../model/Task";

export interface ITaskRepository {
  addTask(task: Task): Promise<void>;
  getTasks(): Promise<Task[]>;
  deleteTask(id: number): Promise<void>;
}
