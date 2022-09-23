import express from "express"
import cors from 'cors'
import tasksRoutes from './routes/tasks.routes'

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  app.use(cors())
  next()
})

app.use(express.json())

app.use('/tasks', tasksRoutes)

app.get('/', (req, res) => {
  res.status(200).json({message: 'rota criada'})
})

app.listen(3000, () => {
  console.log('Rodando na porta 3000')
})
