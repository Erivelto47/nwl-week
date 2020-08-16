import React from "react";
import {View, ImageBackground, Image, Text} from "react-native";

import bgImg from "../../assets/images/give-classes-background.png";
import logoImg from "../../assets/images/logoSplash.png";

import LoginForm from "./form";

import styles from "./styles";


function Login() {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ImageBackground
          resizeMode='repeat'
          source={bgImg}
          style={styles.backgroundContent}>
          <View style={styles.contentContainer}>
            <Image source={logoImg} resizeMode="contain"/>
            <Text style={styles.description}>Sua plataforma de estudos online</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.formContent}>
        <LoginForm />
      </View>
    </View>
  )
}

export default Login;
