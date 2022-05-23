import { Task } from "../model/Task";

interface ITaskRepository {
  findByName(name: string): Task;
  list(): Task[];
  create(name: string, description: string, finallyDate: Date): void
}

export { ITaskRepository }