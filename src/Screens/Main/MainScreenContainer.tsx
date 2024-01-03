import { useLazyGetFarmListQuery, useLazyGetFarmQuery } from "@/Services";
import MainScreen from "./MainScreen";
import { useEffect, useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { useIsFocused } from "@react-navigation/native";
export type MainScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.MAINTREE
  >;

const MainScreenContainer = ({navigation}:MainScreenNavigatorProps) => {
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] = useLazyGetFarmListQuery();
  const isFocused = useIsFocused();

useEffect(() => {
  navigation.addListener('focus', () => 
  {
    fetchOne()
    console.log(data)
    alert(`${isSuccess}`)
  })
  console.log(data)
  console.log(isFocused)
}, [navigation]);
  return <MainScreen navigation={navigation}
  data={data} isSuccess={isSuccess} isFetching={isFetching}
   ></MainScreen>;
};
export default MainScreenContainer;
