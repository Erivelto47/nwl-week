import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Landing from "../pages/landing";
import GiveClasses from "../pages/give-classes";
import {Provider} from "react-redux";

import StudyTabs from "./StudyTabs";
import SplashTabs from "./SplashTabs";

import store from "../store/store";
import Login from "../pages/login";

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator screenOptions={{headerShown: false}}>
          <Screen name="Splash" component={SplashTabs} />
          <Screen name="Landing" component={Landing}/>
          <Screen name="GiveClasses" component={GiveClasses}/>
          <Screen name="Login" component={Login}/>
          <Screen name="Study" component={StudyTabs}/>
        </Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default AppStack;
