import {Request, Response} from "express";
import {LoginService} from "./LoginService";
import {LoginResponse} from "./LoginResponse";
import LoginServiceImpl from "./LoginServiceImpl";
import UserServiceImpl from "../user/UserServiceImpl";

class LoginController {

  private loginService: LoginService;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  /**
   * Recebe email e senha e retorna dados ou null
   */
  index(request: Request, response: Response): Response<LoginResponse> {
    return this.loginService.login(request, response);
  }
}

export default LoginController
