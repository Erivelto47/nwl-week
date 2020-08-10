import {Teacher} from "../../components/teacher-item";
import {FavoriteActions} from "./favoriteActions";
import {getFavorites} from "../../services/favoriteService";

const INITIAL_STATE = {
  data: getFavorites()
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
      const newState = {...state, data: [...state.data, action.payload]}
      console.log('ADDIN: ');
      console.log(newState.data)
      return newState;
    case 'REMOVE_FAVORITE':
      const newStateRe = { data: [...state.data.filter(teacher => teacher !== action.payload)]}
      console.log('REMOVE: ');
      console.log(newStateRe.data)
      return newStateRe;
    default:
      return state
  }
}
