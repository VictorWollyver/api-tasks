const Task = require('../models/Task')

module.exports = class TaskController {

  static async getTasks(req, res) {
    const task = new Task()

    const listTask = await task.getTasksAll()
  
    return res.status(200).json(listTask)
  }

  static async getTasksById(req, res) {
    const { id } = req.body

    const task = new Task()

    const oneTask = await task.getTasksById(id)

    res.status(200).json(oneTask)
  }

  static postTask(req, res) {
    const { title, description } = req.body

    const task = new Task(title, description)
    
    task.savePost()

    res.status(201).json({})
  }

  static deleteTask(req, res) {
    const { id } = req.body

    const task = new Task()

    task.deleteOne(id)

    return res.status(201).json({message: 'Task Deletada'})
  }

  static updateTaskById(req, res) {
    const { id, title, description } = req.body

    const task = new Task(title, description)

    task.updateOneTask(id)

    return res.status(200).json({message: 'atualizado com sucesso'})
  }

}


