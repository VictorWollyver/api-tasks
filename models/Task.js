const conn = require('../db/conn')
const database = conn.db('tasks')
const tasks = database.collection('tasks')

const { ObjectId } = require('mongodb')

class Task {
  constructor(title, description){
    this.title = title
    this.description = description
  }

  getTasksAll() {
    const listTasks = tasks.find({}).toArray()

    return listTasks
  }

  getTasksById(id) {
    const task = tasks.findOne({ _id: ObjectId(id)})

    return task
  }

  savePost() {
    const task = tasks.insertOne({ title: this.title, description: this.description})

    return task
  }

  deleteOneTask(id) {
    const deletedTask = tasks.deleteOne({_id: ObjectId(id)})

    return deletedTask
  }

  updateOneTask(id) {
    const updateTask = tasks.updateOne({_id: ObjectId(id)}, {$set: this})

    return updateTask
  }

}

module.exports = Task