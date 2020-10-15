import React from "react";
import {View, ImageBackground, Text} from "react-native";
import {Ionicons} from '@expo/vector-icons'

import bgImg from '../../../../assets/images/give-classes-background.png';
import colorsDefault from "../../../../assets/styles/color";

import styles from "./styles";

function StudyBoard() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImg}
        resizeMode='center'
        style={styles.backgroundContent}>
        <View style={styles.studyContainer}>
          <Ionicons style={styles.studyIcon} name="md-book" size={120} color="#fff"/>
        </View>

        <View style={styles.studyTextContainer}>
          <View style={styles.textContent}>
            <Text style={styles.studyNumber}>01.</Text>
            <Text style={styles.descriptionText}>Encontre vários professores para ensinar você</Text>
          </View>
          <View style={styles.footerIndicators}>
            <View style={styles.indicatorsSquare}>
              <Ionicons style={styles.indicatorSelectSquare} name="ios-square" size={10}
                        color={colorsDefault.colorPrimaryDark}/>
              <Ionicons name="ios-square" size={10} color={colorsDefault.colorTextInPrimary}/>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default StudyBoard;
