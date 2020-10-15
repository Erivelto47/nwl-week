import {Teacher} from "../../components/teacher-item";

export interface FavoriteActions {
  type: string;
  payload: Teacher;
}

const favoriteActions = {
  addFavorite: (teacher: Teacher) => ({
    type: 'ADD_FAVORITE',
    payload: teacher
  }),
  removeFavorite: (teacher: Teacher) => ({
    type: 'REMOVE_FAVORITE',
    payload: teacher
  })
}
export default favoriteActions;
