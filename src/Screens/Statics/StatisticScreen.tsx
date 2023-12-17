import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../../Components/shared";
import { colors } from "../../Components/colors";
import RegularText from "@/Components/texts/RegularText";
import { SafeAreaView } from "react-native";
import BigText from "@/Components/texts/BigText";
import logo from "../../../assets//bg/logocay.png";
import staticImage from "../../../assets//bg/static.png";
import RegularButton from "@/Components/button/RegularButton";
import TextButton from "@/Components/button/TextButton";
const StatisticContainer = styled(Container)`
  justify-content: flex-start;
  align-items: center;
  flex-direction: col;
  width: 100%;
  flex: 1;
  background-color: ${colors.white};
`;
const Header = styled.View`
  width: 100%;
  height: 50px;
  top: 0;
  flex-direction: row;
  align-items: center;
  margin: 18px;
`;
const LogoContainer = styled.Image`
  width: 9%;
  resize-mode: contain;
`;
const SubContainer = styled.View`
  width: 90%;
  margin: 10px;
  background-color: white;
  flex-direction: col;
  align-items: center;
  margin-horizontal: 13px;
`;
const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;
const Divider = styled.View`
  width: 100%;
  height: 3px;
  background-color: ${colors.black};
  margin-top: 2px;
  margin-bottom: 5px;
`;
const StatisticScreen: FunctionComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: `${colors.white}` }}>
      <StatisticContainer>
        <Header>
          <LogoContainer
            source={logo}
            style={{ marginLeft: 18 }}
          ></LogoContainer>
          <BigText
            textStyles={{
              fontSize: 25,
              marginStart: 5,
              fontWeight: "300",
              color: "#0D986A",
            }}
          >
            PLANTSCAPE
          </BigText>
        </Header>
        <SubContainer>
        <BigText
          textStyles={{
            fontSize: 20,
            width: "100%",
            textAlign: "left",
            color: "#181D27",
          }}
        >
          Tin mới
        </BigText>
        </SubContainer>
        <SubContainer>
          <Wrapper>
          <TextButton
              onPress={() => {
              }}
              btnStyles={{
                alignSelf: "flex-end",
                backgroundColor: `${colors.primary}`,
                width: "20%",
              }}
              textStyles={{ fontSize: 13 , fontWeight: "400",color: `${colors.white}` }}
            >
             Tin tức
            </TextButton>
            <TextButton
              onPress={() => {
              }}
              btnStyles={{
                alignSelf: "flex-end",
                backgroundColor: `${colors.tranparent}`,
                width: "20%",
              }}
              textStyles={{ fontSize: 13 , fontWeight: "400",color: `${colors.black}` }}
            >
             Mùa vụ
            </TextButton>
            <TextButton
              onPress={() => {
              }}
              btnStyles={{
                alignSelf: "flex-end",
                backgroundColor: `${colors.tranparent}`,
                width: "20%",
              }}
              textStyles={{ fontSize: 13 , fontWeight: "400",color: `${colors.black}` }}
            >
             Thời tiết
            </TextButton>
            <TextButton
              onPress={() => {
              }}
              btnStyles={{
                alignSelf: "flex-end",
                backgroundColor: `${colors.tranparent}`,
                width: "23%",
              }}
              textStyles={{ fontSize: 13 , fontWeight: "400",color: `${colors.black}` }}
            >
             Phân bón
            </TextButton>
          </Wrapper>
        </SubContainer>
      </StatisticContainer>
    </SafeAreaView>
  );
};
export default StatisticScreen;
