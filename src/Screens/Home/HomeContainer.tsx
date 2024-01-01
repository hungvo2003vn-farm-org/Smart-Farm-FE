import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Home } from "./Home";
import React, { useState, useEffect } from "react";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
export type HomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.HOME
  >;
export const HomeContainer = ({navigation}:HomeScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.replace(screen);
  };
  // const [userId, setUserId] = useState("9");

  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  //   useLazyGetUserQuery();

  // useEffect(() => {
  //   fetchOne(userId);
  // }, [fetchOne, userId]);

  // return <Home data={data} isLoading={isLoading} />;
  return <Home  onNavigate={onNavigate}/>;
};
