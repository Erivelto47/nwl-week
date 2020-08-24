import React from "react";
import {Text, View, ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {BorderlessButton} from "react-native-gesture-handler";
import {Ionicons} from "@expo/vector-icons";

import bgImg from "../../../../assets/images/give-classes-background.png";
import colorsDefault from "../../../../assets/styles/color";

import styles from "./styles";

function GiveClassesBoard() {
  const navigate = useNavigation();

  function handlleToLoginPage() {
    navigate.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImg}
        resizeMode='center'
        style={styles.backgroundContent}>
        <View style={styles.studyContainer}>
          <Ionicons style={styles.studyIcon} name="ios-easel" size={120} color="#fff"/>
        </View>

        <View style={styles.studyTextContainer}>
          <View style={styles.textContent}>
            <Text style={styles.studyNumber}>02.</Text>
            <Text style={styles.descriptionText}>Ou dê aulas sobre o que você mais conhece</Text>
          </View>
          <View style={styles.footerIndicators}>
            <BorderlessButton onPress={handlleToLoginPage}>
              <Ionicons name="ios-arrow-dropright" size={48} color={colorsDefault.colorPrimaryLighter}/>
            </BorderlessButton>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default GiveClassesBoard;
