import {Teacher} from "../components/teacher-item";
import AsyncStorage from "@react-native-community/async-storage";

export function getFavourites() {
  const favorites = AsyncStorage.getItem('favorites');
  const arrayFavourites: Teacher[] = [];

  favorites.then(teachers => {
    if(teachers) {
      JSON.parse(teachers).map((teacher:Teacher) => {
        arrayFavourites.push(teacher);
      });
    }
  })

  return arrayFavourites;
}

export function addFavourite(teacher: Teacher) {

  if(!isFavourite(teacher)) {
    setItemFavourite(teacher)
  }
}

export function removeFavourite(teacher: Teacher) {

  if(isFavourite(teacher)) {
    removeItemFavourite(teacher)
  }
}

export function isFavourite(teacher: Teacher): boolean {
  return getFavourites().includes(teacher);
}

async function setItemFavourite(teacher: Teacher) {
  const favoritesArray = getFavourites();
  favoritesArray.push(teacher);
  await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
}

async function removeItemFavourite(teacher: Teacher) {
  const favoritesArray = getFavourites();
  const newArray = favoritesArray.filter(favourite => favourite !== teacher);
  await AsyncStorage.setItem('favorites', JSON.stringify(newArray));
}
