import { TasksRepository } from "../repositories/TasksRepository";

interface IRequest {
  name: string;
  description: string;
  finallyDate: Date;
}

class CreateTaskService {
  constructor(private tasksRepository: TasksRepository) {

  }

  execute({ name, description, finallyDate }: IRequest): void {
    const taskAlreadyExists = this.tasksRepository.findByName(name)
    if (taskAlreadyExists) {
      throw new Error("Category already exists!")
    } 
  
    this.tasksRepository.create({name, description, finallyDate})
  }
}

export { CreateTaskService }