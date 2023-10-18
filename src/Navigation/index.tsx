import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";

import { HomeContainer } from "@/Screens/Home";
import { FarmDetailContainer } from "@/Screens/FarmDetail";
import { IrrigationModeContainer } from "@/Screens/IrrigationMode";
import { ModelContainer } from "@/Screens/Model";
import { HistoryContainer } from "@/Screens/History";
export type RootStackParamList = {
  // [RootScreens.MAIN]: undefined;
  // [RootScreens.WELCOME]: undefined;
  [RootScreens.HOME]: undefined;
  [RootScreens.FARMDETAIL]: undefined;
  [RootScreens.HISTORY]: undefined;
  [RootScreens.IRRIGATIONMODE]: undefined;
  [RootScreens.MODEL]: undefined;
  [RootScreens.NOTIFICATION]: undefined;
  [RootScreens.REPORT]: undefined;
  [RootScreens.PROFILE]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        /> */}
        {/* <RootStack.Screen
          name={RootScreens.HOME}
          component={HomeContainer}
        /> */}
        <RootStack.Screen
          name={RootScreens.FARMDETAIL}
          component={FarmDetailContainer}
        />
        <RootStack.Screen
          name={RootScreens.IRRIGATIONMODE}
          component={IrrigationModeContainer}
        />
        <RootStack.Screen
          name={RootScreens.MODEL}
          component={ModelContainer}
        />
        <RootStack.Screen
          name={RootScreens.HISTORY}
          component={HistoryContainer}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
