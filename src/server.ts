import express from 'express'
import { taskRoutes } from './routes/tasks.routes'

const app = express()

app.use(express.json())

app.use("/tasks", taskRoutes)



app.listen(3333, () => console.log('Server is running'))