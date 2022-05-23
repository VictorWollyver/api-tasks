import { Router } from "express";
import { TasksRepository } from "../repositories/TasksRepository";
import { CreateTaskService } from "../services/CreateTaskService";


const taskRoutes = Router();
const tasksRepository = new TasksRepository()

taskRoutes.post('/', (req, res) => {
  const { name, description, finallyDate } = req.body;

  const CreateCategoryService = new CreateTaskService(tasksRepository)
  CreateCategoryService.execute({ name, description, finallyDate})

  return res.status(201).send()
})

taskRoutes.get('/', (req, res) => {
  return res.json(tasksRepository.list())
})

export { taskRoutes }