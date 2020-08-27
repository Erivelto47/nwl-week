import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import {Feather} from '@expo/vector-icons'
import {View, TextInput, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {BorderlessButton} from "react-native-gesture-handler";

import {login, getUserCredentials} from '../../services/UserService'

import {UserSession} from "../../models/UserSession";
import colorsDefault from "../../assets/styles/color";

import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

function LoginForm() {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isRemeber, setIsRemember] = useState(false);

  const navigate = useNavigation();

  let initialValues: UserSession = {
    email: '',
    password: '',
    rememberMe: false
  }

  useEffect(() => {
    getUserCredentials()
      .then(value => {
      initialValues.email = value.email;
      initialValues.password = value.password;
      initialValues.rememberMe = value.rememberMe;
    });
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        values.rememberMe = isRemeber;
        login(values).then(() => navigate.navigate('Landing'));
      }}
    >
      {({handleChange, handleBlur, handleSubmit, values}) => (

        <View style={styles.form}>
          <View style={styles.formHeader}>
            <Text style={styles.formHeaderText}>Fazer Login</Text>
            <BorderlessButton>
              <Text style={styles.formHeaderTextButton}>Criar uma conta</Text>
            </BorderlessButton>
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder={"E-mail"}
              keyboardType="email-address"
              textContentType="emailAddress"
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={() => {
                handleBlur('email');
              }}
              value={values.email}
            />
            <View style={styles.inputPasswordGroup}>
              <TextInput
                inputAccessoryViewID={"password"}
                placeholder={"Senha"}
                secureTextEntry={isHidePassword}
                style={[styles.input, styles.inputPassword]}
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {!isHidePassword &&
              <Feather style={styles.inputPasswordHide} name="eye" size={20} color="#000"
                       onPress={() => setIsHidePassword(!isHidePassword)}/>}
              {isHidePassword &&
              <Feather style={styles.inputPasswordHide} name="eye-off" size={20} color="#000"
                       onPress={() => setIsHidePassword(!isHidePassword)}/>}
            </View>
            <View style={styles.formFooter}>
              <View style={styles.checkboxGroup}>
                <CheckBox
                  tintColors={{true: colorsDefault.colorSecundary, false: colorsDefault.colorTextComplement}}
                  disabled={false}
                  value={values.rememberMe}
                  onValueChange={(newValue: boolean) => setIsRemember(newValue)}
                />
                <Text style={styles.formFooterRememberText}>Lembrar-me</Text>
              </View>
              <BorderlessButton>
                <Text style={styles.formFooterPasswordRecoveryText}>Esqueci minha senha</Text>
              </BorderlessButton>
            </View>

            <BorderlessButton style={styles.submitButton} title="Submit" onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Entrar</Text>
            </BorderlessButton>
          </View>
        </View>
      )}
    </Formik>
  );
}

export default LoginForm
