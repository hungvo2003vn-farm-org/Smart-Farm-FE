import { IrrigationMode} from "./IrrigationMode";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

export type IrrigationModeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.IRRIGATIONMODE
  >;
  
export const IrrigationModeContainer = ({navigation}:IrrigationModeScreenNavigatorProps) => {
  
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };


  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  //   useLazyGetUserQuery();

  // useEffect(() => {
  //   fetchOne(userId);
  // }, [fetchOne, userId]);

  // return <Home data={data} isLoading={isLoading} />;
  return <IrrigationMode onNavigate={onNavigate}/>;
};
