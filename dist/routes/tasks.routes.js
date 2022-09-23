"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasksRoutes = express_1.default.Router();
const TaskController_1 = __importDefault(require("../controllers/TaskController"));
tasksRoutes.get('/', TaskController_1.default.getTasks);
tasksRoutes.post('/post', TaskController_1.default.postTask);
tasksRoutes.get('/getById', TaskController_1.default.getTasksById);
tasksRoutes.delete('/delete', TaskController_1.default.deleteTask);
tasksRoutes.put('/update', TaskController_1.default.updateTaskById);
exports.default = tasksRoutes;
