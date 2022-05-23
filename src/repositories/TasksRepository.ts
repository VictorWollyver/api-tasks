import { Task } from "../model/Task";

interface ICreateTaskDTO {
  name: string,
  description: string,
  finallyDate: Date
}

class TasksRepository {

  private tasks: Task[];

  constructor() {
    this.tasks = []
  }

  create({ name, description, finallyDate }: ICreateTaskDTO) {
    const task = new Task() 
  
    Object.assign(task, {
      name,
      description,
      createdAt: new Date(),
      finallyDate
    })

    this.tasks.push(task)
  }

  list(): Task[] {
    return this.tasks

  }

  findByName(newName: string): Task {
    const task = this.tasks.find(({ name }) => name === newName)
    return task
  }
}

export { TasksRepository }