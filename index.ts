import express from "express"
import cors from 'cors'
import tasksRoutes from './routes/tasks.routes'
import userRoutes from "./routes/users.routes"

const app = express()

// app.use((req, res, next) => {
// 	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
//     res.header("Access-Control-Allow-Origin", "*");
// 	//Quais são os métodos que a conexão pode realizar na API
//     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
//     app.use(cors());
//     next();
// });

app.use(cors())

app.use(express.json())

app.use('/tasks', tasksRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
  res.status(200).json({message: 'rota criada'})
})

app.listen(3000, () => {
  console.log('Rodando na porta 3000')
})
