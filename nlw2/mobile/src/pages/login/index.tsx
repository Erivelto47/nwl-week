import React, {useState, useEffect} from "react";
import {View, ImageBackground, Image, Text, Keyboard} from "react-native";

import bgImg from "../../assets/images/give-classes-background.png";
import logoImg from "../../assets/images/logoSplash.png";

import LoginForm from "./form";

import styles from "./styles";

function Login() {
  const [isKeyboard, setIsKeyboard] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => setIsKeyboard(true));
    Keyboard.addListener("keyboardDidHide", () => setIsKeyboard(false));
  })

  return (
    <View style={styles.container}>
      <View style={!isKeyboard ? styles.content: styles.contentKeyboard}>
        <ImageBackground
          resizeMode='repeat'
          source={bgImg}
          style={styles.backgroundContent}>
          { !isKeyboard && <View style={styles.contentContainer}>
            <Image source={logoImg} resizeMode="contain"/>
            <Text style={styles.description}>Sua plataforma de estudos online</Text>
          </View>}
        </ImageBackground>
      </View>
      <View style={styles.formContent}>
        <LoginForm />
      </View>
    </View>
  )
}

export default Login;
