import React from "react";
import Splash from "../pages/splash";
import StudyBoard from "../pages/splash/onbording/study";
import GiveClassesBoard from "../pages/splash/onbording/give-classes";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const {Navigator, Screen} = createMaterialTopTabNavigator();

function SplashTabs() {

  return (
    <Navigator initialRouteName="Splash" tabBar={() => null}>
      <Screen name="Splash" component={Splash}/>
      <Screen name="StudyBoard" component={StudyBoard}/>
      <Screen name="GiveClassesBoard" component={GiveClassesBoard}/>
    </Navigator>
  )

}

export default SplashTabs;
