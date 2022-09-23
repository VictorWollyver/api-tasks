"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("../models/Task"));
class TaskController {
    static getTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = new Task_1.default();
            const listTask = yield task.getTasksAll();
            return res.status(200).json(listTask);
        });
    }
    static getTasksById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const task = new Task_1.default();
            const oneTask = yield task.getTasksById(id);
            res.status(200).json(oneTask);
        });
    }
    static postTask(req, res) {
        const { title, description } = req.body;
        const task = new Task_1.default(title, description);
        task.savePost();
        res.status(201).send();
    }
    static deleteTask(req, res) {
        const { id } = req.body;
        const task = new Task_1.default();
        task.deleteOne(id);
        return res.status(201).json({ message: "Task Deletada" });
    }
    static updateTaskById(req, res) {
        const { id, title, description } = req.body;
        const task = new Task_1.default(title, description);
        task.updateOneTask(id);
        return res.status(200).json({ message: "atualizado com sucesso" });
    }
}
exports.default = TaskController;
;
