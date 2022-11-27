import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'

import conn from '../db/conn'
import User from '../models/User'
const database = conn.db('tasks')
const users = database.collection('users')

export async function verifyIfNameAlreadyExists(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body

  const userExists = await users.findOne({ name: name })

  return userExists ? res.status(400).json({ message: 'Erro, nome ja existe'}) : next()
}

export async function verifyIfAccountExists(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body

  const accountExists = await users.findOne({ name: name })

  res.locals.user = accountExists

  return accountExists ? next() : res.status(400).json({ message: 'Erro, não existe conta com esse nome'}) 
}

export async function verifyIfPasswordIsCorrect(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body

  const { user } = res.locals

  const checkPassword = await bcrypt.compare(password, user.password)

  if(checkPassword) {
    return next()
  } else {
    return res.status(400).json({ message: 'Senha incorreta'})
  }

}

export async function verifyPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body

  if (password.length < 8) {
    return res.status(400).json({ message: 'Erro, Senha deve ser maior que 7 digitos'})
  }

  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)
  res.locals.passwordEncripted = passwordHash
  
  return next()
}

export async function generateToken(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body

  const token = jwt.sign({
    name: name,
  }, 'tokensecret')

  res.locals.token = token

  next()
}

export async function getToken(req: Request, res: Response, next: NextFunction) {


  if (req.headers.authorization) {
    const dirtyToken = req.headers.authorization
    const token = dirtyToken.split(' ')[1]
    res.locals.token = token
    return next()
    } else {
      res.status(401).json({message: 'Token invalido'})
    }

}

 export async function checkUser(req: Request, res: Response, next: NextFunction) {
    let currentUser 
    const { token } = res.locals
   
    const tokenDecoded = jwt.verify(token, 'tokensecret')
    if(typeof tokenDecoded != 'string') {
      currentUser = await User.getUserByName(tokenDecoded.name) 
      res.locals.user = currentUser
      next()
    } else {
      return res.status(401).json({message: 'Token invalido'})
    }

  }