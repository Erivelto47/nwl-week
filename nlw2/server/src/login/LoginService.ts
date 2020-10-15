import {UserCredentials} from "../user/UserCredentials";
import {LoginResponse} from "./LoginResponse";
import {Request, Response} from "express";

export interface LoginService {

  login(request: Request, response: Response): Response<LoginResponse>;
}
