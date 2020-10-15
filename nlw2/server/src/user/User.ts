import {UserCredentials} from "./UserCredentials";

export interface User {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  userCredentials: UserCredentials;
}
