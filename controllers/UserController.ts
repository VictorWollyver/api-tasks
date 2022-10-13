import {Request, Response} from 'express'
import createUserToken from '../helpers/create-user-token';
import User from '../models/User'
import jwt, { JwtPayload } from 'jsonwebtoken'

interface IDecodedToken {
  name: string
  iat: number
}


export default class UsersController {

  static async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const { token, passwordEncripted: password } = res.locals

    const user = new User({name, email, password})

    user.createUser()

    res.status(201).json({message: 'Conta criada com sucesso', token: token})
  }

  static async loginUser(req: Request, res: Response) {
    const { token } = res.locals

    res.status(200).json({ message: 'Login com sucesso', token })
  }

   static async checkUser(req: Request, res: Response) {
    let currentUser 
    const { token } = res.locals
   
    const tokenDecoded = jwt.verify(token, 'tokensecret')

    currentUser = await User.getUserByName(tokenDecoded.name)

    res.status(200).send(currentUser)
  }


}