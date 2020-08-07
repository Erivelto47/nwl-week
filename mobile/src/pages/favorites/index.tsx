import React from "react";
import {View, Text} from "react-native";

import styles from "./styles";
import PageHeader from "../../components/page-header";

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys Favoritos"/>
    </View>
  )
}

export default Favorites;
