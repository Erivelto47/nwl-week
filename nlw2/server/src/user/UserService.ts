import {UserCredentials} from "./UserCredentials";
import {User} from "./User";

export interface UserService {

  findUserByCredentials(userCredentials: UserCredentials): Promise<User>;
}
