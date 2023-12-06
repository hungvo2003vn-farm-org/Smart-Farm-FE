import {NewsScreen} from "./NewsScreen";
import React, { useState, useEffect } from "react";
import { useLazyGetUserQuery } from "@/Services";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { News } from "styled-icons/boxicons-regular";

export type NewsScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.NEWS
  >;

export const NewsContainer = ({navigation}:NewsScreenNavigatorProps) => {
    const onNavigate = (screen: RootScreens) => {
      navigation.navigate(screen);
    };
    return <NewsScreen onNavigate={onNavigate}/>;
  };
