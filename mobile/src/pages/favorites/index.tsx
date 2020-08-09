import React, {useState, useEffect} from "react";
import {View, ScrollView} from "react-native";

import styles from "./styles";
import PageHeader from "../../components/page-header";
import TeacherItem, {Teacher} from "../../components/teacher-item";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    loadFavorites();
  })

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        setFavorites(JSON.parse(response));
      }
    })
  }
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys Favoritos"/>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={true}
            />)
        })}

      </ScrollView>
    </View>
  )
}

export default Favorites;
