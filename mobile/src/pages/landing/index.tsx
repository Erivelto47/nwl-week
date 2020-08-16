import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'

import landingImg from '../../assets/images/landing.png';
import hearIcon from '../../assets/images/icons/heart.png';

import api from "../../services/api";
import styles from "./styles";
import {Ionicons} from "@expo/vector-icons";

function Landing() {
  const navigation = useNavigation();

  const [totalConnections, setTotalConnectios] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnectios(total);
    })
  }, []);

  function handleNavigateToGiveClassPage() {
    navigation.navigate('GiveClasses')
  }

  function handleNavigateToStudyPages() {
    navigation.navigate('Study')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={landingImg}/>
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>
          O que deseja fazer?
        </Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
          <Ionicons name="md-book" size={40} color="#fff"/>
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={handleNavigateToGiveClassPage} style={[styles.button, styles.buttonSecondary]}>
          <Ionicons name="ios-easel" size={40} color="#fff"/>
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexoes ja realizadas {' '}
        <Image source={hearIcon}/>
      </Text>
    </View>
  );
}

export default Landing;
