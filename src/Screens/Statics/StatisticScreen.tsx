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
  justify-content: space-between;
  width: 100%;
`;
const StatisticImage = styled.Image`
  width: 80%;
  height: 200px;
  resize-mode: cover;
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
              fontSize: 20,
              marginStart: 5,
              fontWeight: "300",
              color: "#0D986A",
            }}
          >
            PLANTSCAPE
          </BigText>
        </Header>
        <SubContainer>
          <Wrapper>
            <RegularText textStyles={{ fontSize: 30 }}>Nhiệt độ</RegularText>
            <RegularText textStyles={{ fontSize: 30 }}>C</RegularText>
          </Wrapper>
          <Divider />
          <StatisticImage source={staticImage}></StatisticImage>
        </SubContainer>
      </StatisticContainer>
    </SafeAreaView>
  );
};
export default StatisticScreen;
