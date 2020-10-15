import {User} from "./User";
import {UserService} from "./UserService";
import {UserCredentials} from "./UserCredentials";

import db from "../database/connection";

class UserServiceImpl implements UserService {
  async findUserByCredentials(userCredentials: UserCredentials): Promise<User> {
    return db('user_credentials')
      .select()
      .where('email', userCredentials.email)
      .andWhere('password', userCredentials.password)
      .innerJoin('user', 'user.id', 'user_credentials.user_id')
      .first();
  }
}

export default UserServiceImpl;
