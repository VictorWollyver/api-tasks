"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tasks_routes_1 = __importDefault(require("./routes/tasks.routes"));
const app = (0, express_1.default)();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    app.use((0, cors_1.default)());
    next();
});
app.use(express_1.default.json());
app.use('/tasks', tasks_routes_1.default);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'rota criada' });
});
app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});
