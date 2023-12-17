import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { colors } from "../colors";
import { Container } from "../shared";
import { Ionicons } from "@expo/vector-icons";
import RegularText from "../texts/RegularText";
import plant1 from "../../../assets/bg/plant1.png";

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${colors.lightgray};
  height: 120px;
  margin-horizontal: 10px;
  border-radius: 10px;
  margin-vertical: 9px;
`;
const DetailContainer = styled.View`
  flex-direction: col;
  justify-content: center;
  height: 100%;
  margin-left: 10px;
`;
const ImageContainer = styled.Image`
  width: 150px;
  height: 200px;
  resize-mode: contain;
  margin-left: -30px;
`;
import { TreeItemProps } from "./types";
import BigText from "../texts/BigText";
import { FontSize } from "@/Theme/Variables";
import { Pressable } from "react-native";
import { RootScreens } from "@/Screens";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
const TreeItem: FunctionComponent<TreeItemProps> = (props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Pressable onPress={() => navigation.navigate(RootScreens.FARMDETAIL)}>
      <ItemContainer>
        <ImageContainer source={plant1}></ImageContainer>
        <DetailContainer>
          <BigText textStyles={{ fontSize: 20, marginBottom: 10 }}>
            {props.treeName}
          </BigText>
          <RegularText textStyles={{ fontWeight: "200" }}>
            {"Temperature :" + props.temp + "oC"}
          </RegularText>
          <RegularText textStyles={{ fontWeight: "200" }}>
            {"Moisture : " + props.moisture + "%"}
          </RegularText>
        </DetailContainer>
      </ItemContainer>
    </Pressable>
  );
};
export default TreeItem;
