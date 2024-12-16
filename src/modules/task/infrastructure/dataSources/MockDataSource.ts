import { Task } from "../../domain/model/Task";
import { ITaskRepository } from "../../domain/repository/ITaskRepository";

export class MockDataSource implements ITaskRepository {
  private tasks: Task[] = [{ id: 1, name: "Task one", completed: false }];

  async addTask(task: Task): Promise<void> {
    this.tasks.push(task);
  }

  async getTasks(): Promise<Task[]> {
    return this.tasks;
  }

  async deleteTask(id: number): Promise<void> {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
