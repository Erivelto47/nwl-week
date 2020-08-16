import React from "react";
import {Text, View, Image, ImageBackground} from "react-native";

import logoImg from '../../assets/images/logoSplash.png';
import bgImg from '../../assets/images/give-classes-background.png';

import styles from "./styles";

function Splash() {

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={"contain"}
        source={bgImg }
        style={styles.content}>
        <View style={styles.contentContainer}>
          <Image source={logoImg} resizeMode="contain"/>
          <Text style={styles.description}>Sua plataforma de estudos online</Text>
        </View>
      </ImageBackground>
    </View>
  )}

export default Splash;
