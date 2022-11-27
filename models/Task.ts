import conn from '../db/conn'
const database = conn.db('tasks')
const tasks = database.collection('tasks')
const users = database.collection('users')

import User from './User'

import { ObjectId } from 'mongodb'

interface ITask {
  name: string;
  description: string;
  status: boolean;
}
interface IUser {
  name: string;
  password: string
  email: string
  tasks: ITask[]
}

class Task {
  name: string;
  description: string;
  status: boolean

  constructor({ name, description, status }: ITask) {
    this.name = name
    this.description = description
    this.status = status
  }

  getUserByToken(token: any) {
    const user = users.findOne({ name: token })
   
    return user
  }

  async postTask(user: any) {
    users.updateOne({ name: user.name }, {$set: {'tasks': [...user.tasks, this]}})

    return [...user.tasks, this]
  }

  static deleteTaskByIndex(index: number, user: IUser) {
    const tasksFilter = user.tasks.filter((element, indexElement) => {
      return indexElement != index
    })

    users.updateOne({ name: user.name }, {$set: {'tasks': tasksFilter}})

    return tasksFilter
  }

  static updateTaskByIndex(index: number, user: IUser) {
    const taskToUpdate = user.tasks.find((element, indexElement) => {
      return indexElement == index
    })

    
    if (taskToUpdate) {
      taskToUpdate.status = true
      user.tasks[index] = taskToUpdate
      users.updateOne({ name: user.name}, {$set: {tasks: user.tasks}})
    } 

    return user.tasks
  }
}



export default Task