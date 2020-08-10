import {combineReducers} from "redux";

import {favorites} from "./favorites/favoritesReducer";

const reducers = combineReducers({
  favorites,
});

export default reducers;
