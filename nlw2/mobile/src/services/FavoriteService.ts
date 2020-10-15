import AsyncStorage from "@react-native-community/async-storage";
import {User} from "../models/User";

export function getFavourites() {
  const favorites = AsyncStorage.getItem('favorites');
  const arrayFavourites: User[] = [];

  favorites.then(teachers => {
    if(teachers) {
      JSON.parse(teachers).map((teacher:User) => {
        arrayFavourites.push(teacher);
      });
    }
  });

  return arrayFavourites
}

export function addFavourite(teacher: User) {

  if(!isFavourite(teacher)) {
    setItemFavourite(teacher)
  }
}

export function removeFavourite(teacher: User) {

  if(isFavourite(teacher)) {
    removeItemFavourite(teacher)
  }
}

export async function isFavourite(teacher: User): Promise<boolean> {
  return getFavourites().includes(teacher);
}

async function setItemFavourite(teacher: User) {
  const favoritesArray = getFavourites();
  favoritesArray.push(teacher);
  await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
}

async function removeItemFavourite(teacher: User) {
  const favoritesArray = getFavourites();
  const newArray = favoritesArray.filter(favourite => favourite !== teacher);
  await AsyncStorage.setItem('favorites', JSON.stringify(newArray));
}
