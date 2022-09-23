"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conn_1 = __importDefault(require("../db/conn"));
const database = conn_1.default.db('tasks');
const tasks = database.collection('tasks');
const mongodb_1 = require("mongodb");
class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
    getTasksAll() {
        const listTasks = tasks.find({}).toArray();
        return listTasks;
    }
    getTasksById(id) {
        const task = tasks.findOne({ _id: (0, mongodb_1.ObjectId)(id) });
        return task;
    }
    savePost() {
        const task = tasks.insertOne({ title: this.title, description: this.description });
        return task;
    }
    deleteOneTask(id) {
        const deletedTask = tasks.deleteOne({ _id: (0, mongodb_1.ObjectId)(id) });
        return deletedTask;
    }
    updateOneTask(id) {
        const updateTask = tasks.updateOne({ _id: (0, mongodb_1.ObjectId)(id) }, { $set: this });
        return updateTask;
    }
}
exports.default = Task;
