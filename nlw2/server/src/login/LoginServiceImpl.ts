import jsonwebtoken from 'jsonwebtoken';

import {LoginService} from "./LoginService";
import {LoginResponse} from "./LoginResponse";
import {UserService} from "../user/UserService";
import {User} from "../user/User";
import {Request, Response} from "express";
import UserServiceImpl from "../user/UserServiceImpl";

class LoginServiceImpl implements LoginService {

  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  login(request: Request, response: Response): Response<LoginResponse> {
    const credentials = request.body;
    const user: User = {userCredentials: credentials, whatsapp: '', name: '', bio: '', avatar: ''};

    this.userService.findUserByCredentials(credentials).then(user => {
      if(user.userCredentials === credentials) {
        const token = this.createToken(user);
        return response.send({user, token} as LoginResponse).status(200);
      }
    });

    return response.send({user, token: ''} as LoginResponse).status(400);
  }

  private createToken(user: User): string {
    const token = jsonwebtoken.sign(user, process.env.SECRET, {
      expiresIn: 140
    });
    return token;
  }
}

export default LoginServiceImpl
