import {Weather} from "./Weather";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

export type WeatherScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.WEATHER
  >;
  
export const WeatherContainer = ({navigation}:WeatherScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };
  return <Weather onNavigate={onNavigate}/>;
};