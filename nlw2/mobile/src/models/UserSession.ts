import {User} from "./User";

export interface UserSession {
  email: string;
  password: string;
  rememberMe: boolean;
  user?: User;
}
