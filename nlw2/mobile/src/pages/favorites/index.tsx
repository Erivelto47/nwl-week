import React from "react";
import {View, ScrollView} from "react-native";
import {useSelector} from "react-redux";

import PageHeader from "../../components/page-header";
import TeacherItem from "../../components/teacher-item";

import styles from "./styles";
import {FavoritesReducerState} from "../../store/favorites/favoritesReducer";
import {User} from "../../models/User";

const Favorites = () => {
  const favorites = useSelector((state: FavoritesReducerState) => state.favorites.data);

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
        {favorites.map((teacher: User) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
            />)
        })}

      </ScrollView>
    </View>
  )
}

export default Favorites;
