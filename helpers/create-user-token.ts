import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

interface IUser {
  name: String;
}

async function createUserToken(user: IUser, req: Request, res: Response) {

  const token = jwt.sign({
    name: user.name,
  }, 'tokensecret')

  res.status(200).json({ message: 'Conta criada com sucesso', token: token})
}

export default createUserToken