import { FarmDetail} from "./FarmDetail";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

export type FarmDetailScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.FARMDETAIL
  >;
  
export const FarmDetailContainer = ({navigation}:FarmDetailScreenNavigatorProps) => {
  
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };


  // const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
  //   useLazyGetUserQuery();

  // useEffect(() => {
  //   fetchOne(userId);
  // }, [fetchOne, userId]);

  // return <Home data={data} isLoading={isLoading} />;
  return <FarmDetail onNavigate={onNavigate}/>;
};
