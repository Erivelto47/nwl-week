import {Teacher} from "../../components/teacher-item";
import {FavoriteActions} from "./favoriteActions";
import {getFavourites} from "../../services/favoriteService";

const INITIAL_STATE = {
  data: getFavourites()
}

interface FavoritesReducer {
  data: Teacher[]
}

export interface FavoritesReducerState {
  favorites: FavoritesReducer;
}

export function favorites(state: FavoritesReducer = INITIAL_STATE, action: FavoriteActions) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {...state, data: [...state.data, action.payload]} ;
    case 'REMOVE_FAVORITE':
      return { data: [...state.data.filter(teacher => teacher !== action.payload)]};
    default:
      return state
  }
}
