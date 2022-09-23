import Task from '../models/Task'

import {Request, Response} from 'express'

export default class TaskController {
 
  static async getTasks(req: Request, res: Response) {

    const listTask = await Task.getTasksAll();

    return res.status(200).json(listTask);
  }

  static async getTasksById(req: Request, res: Response) {
    const { id } = req.body;

    const oneTask = await Task.getTasksById(id);

    res.status(200).json(oneTask);
    
  }

  static postTask(req: Request, res: Response) {
    const { title, description } = req.body;

    const task = new Task({ title, description });

    task.savePost();

    res.status(201).send();
  }

  static deleteTask(req: Request, res: Response) {
    const { id } = req.body;

    Task.deleteOneTask(id);

    return res.status(201).json({ message: "Task Deletada" });
  }

  static updateTaskById(req: Request, res: Response) {
    const { id, title, description } = req.body;

    const task = new Task({title, description});

    task.updateOneTask(id);

    return res.status(200).json({ message: "atualizado com sucesso" });
  }
};
