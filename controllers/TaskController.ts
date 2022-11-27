import Task from '../models/Task'
import jwt from 'jsonwebtoken';

import {Request, Response} from 'express'

export default class TaskController {

  static async postTask(req: Request, res: Response) {
    const { user } = res.locals

    const { name, description } = req.body;

    const task = new Task({ name, description, status: false });

    const tasks = await task.postTask(user)

    res.status(201).json(tasks);
  }

  static async getTasks(req: Request, res: Response) {
    const { user } = res.locals

    res.status(200).json(user.tasks);
  }

  static async getTasksByIndex(req: Request, res: Response) {
    const { user } = res.locals

    res.status(200).json(user.tasks);
  }

  static async deleteTask(req: Request, res: Response) {
    const { index } = req.params
    const { user } = res.locals

    const taskFiltred = Task.deleteTaskByIndex(Number(index), user)

    res.status(200).json(taskFiltred);
  }

   static async updateTask(req: Request, res: Response) {
    const { index } = req.params
    const { user } = res.locals

    const tasksUpdated = Task.updateTaskByIndex(Number(index), user)

    res.status(200).json(tasksUpdated);
  }

};
