import AsyncStorage from "@react-native-community/async-storage";
import {UserSession} from "../models/UserSession";
import api from "./api";

/**
 * Set user Credentials if remember option is true
 *  and call the API
 * @param userSession
 */
export function login(userSession: UserSession) {
  console.log(userSession)
  userSession.rememberMe && setRememberMe(userSession);
  return api.post('/login', {userSession}).then((value) => {
    userSession.user = value.data;
    setUserSession(userSession);
  })
}

export function isLogged() {

}

export function setUserSession(userSession: UserSession) {
  AsyncStorage.setItem('userSession', JSON.stringify(userSession));
}

export async function getUserSession(): Promise<UserSession> {
  const userSession = await AsyncStorage.getItem('userSession');
  return userSession ? JSON.parse(userSession) : {};
}

export async function getUserCredentials(): Promise<UserSession> {
  const userCredentials = await AsyncStorage.getItem('userCredentials');
  return userCredentials ? JSON.parse(userCredentials) : {};
}

function setRememberMe(userSession: UserSession) {
  const { email, password, rememberMe } = userSession;
  AsyncStorage.setItem('userCredentials', JSON.stringify({ email, password, rememberMe }));
}





