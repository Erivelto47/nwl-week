import {Teacher} from "../components/teacher-item";
import AsyncStorage from "@react-native-community/async-storage";

export function getFavorites() {
  const array: Teacher[] = [];
  AsyncStorage.getItem('favorites')
    .then(response => {
      if (response) {
        JSON.parse(response)
          .map((teacher: Teacher) => {
            array.push(teacher)
          })
      }
    })
  return array;
}
