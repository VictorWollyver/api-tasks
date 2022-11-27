import conn from '../db/conn'

const database = conn.db('tasks')
const users = database.collection('users')

interface ITask {
  name: string;
  description: string;
  status: boolean;
}
interface IUser {
  name: string;
  password: string
  email: string
  tasks: ITask[]
}

export default class User {
  name: string;
  password: string
  email: string
  tasks: ITask[]

  constructor({name, email, password, tasks}: IUser) {
    this.name = name;
    this.email = email
    this.password = password
    this.tasks = tasks
  }

  createUser() {
    users.insertOne({name: this.name, email: this.email, password: this.password, tasks: []})
  }

  static getUserByName(name: string) {
    return users.findOne({ name: name })
  }
}