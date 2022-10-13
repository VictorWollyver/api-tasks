import conn from '../db/conn'

const database = conn.db('tasks')
const users = database.collection('users')

interface IUser {
  name: string;
  password: string
  email: string
}

export default class User {
  name: string;
  password: string
  email: string

  constructor({name, email, password}: IUser) {
    this.name = name;
    this.email = email
    this.password = password
  }

  createUser() {
    users.insertOne({name: this.name, email: this.email, password: this.password})
  }

  static getUserByName(name: string) {
    return users.findOne({ name: name })
  }
}