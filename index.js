const express = require('express')
const cors = require('cors')
const app = express()
const conn = require('./db/conn')


const tasksRoutes = require('./routes/tasks.routes')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  app.use(cors())
  next()
})

app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

app.use('/tasks', tasksRoutes)

app.get('/', (req, res) => {
  res.status(200).json({message: 'rota criada'})
})

app.listen(3000, () => {
  console.log('Rodando na porta 3000')
})