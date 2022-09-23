import conn from '../db/conn'
const database = conn.db('tasks')
const tasks = database.collection('tasks')

import { ObjectId } from 'mongodb'

interface ITask {
  title: string;
  description: string; 
}

class Task {
  title: string;
  description: string;

  constructor({ title, description }: ITask) {
    this.title = title
    this.description = description
  }

  static getTasksAll() {
    const listTasks = tasks.find({}).toArray()

    return listTasks
  }

  static getTasksById(id: ObjectId) {
    const task = tasks.findOne({ _id: new ObjectId(id)})

    return task
  }

  savePost() {
    const task = tasks.insertOne({ title: this.title, description: this.description})

    return task
  }

  static deleteOneTask(id: ObjectId) {
    const deletedTask = tasks.deleteOne({_id: new ObjectId(id)})

    return deletedTask
  }

  updateOneTask(id: ObjectId) {
    const updateTask = tasks.updateOne({_id: new ObjectId(id)}, {$set: this})

    return updateTask
  }

}

export default Task