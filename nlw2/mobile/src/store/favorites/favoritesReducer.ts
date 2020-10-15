import {FavoriteActions} from "./favoriteActions";
import {getFavourites} from "../../services/FavoriteService";
import {User} from "../../models/User";

const INITIAL_STATE = {
  data: getFavourites()
}

interface FavoritesReducer {
  data: User[]
}

export interface FavoritesReducerState {
  favorites: FavoritesReducer;
}

export function favorites(state: FavoritesReducer = INITIAL_STATE, action: FavoriteActions) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if(!state.data.filter(teacher => teacher.id === action.payload.id).length){
        return {...state, data: [...state.data, action.payload]} ;
      }
      break
    case 'REMOVE_FAVORITE':
      return { data: [...state.data.filter(teacher => teacher !== action.payload)]};
    default:
      return state
  }
}
