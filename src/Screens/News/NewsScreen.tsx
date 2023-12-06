import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styled from "styled-components/native";
import { Container } from "../../Components/shared";
import BigText from "@/Components/texts/BigText";
import logo from "../../../assets/bg/logocay.png";
import { AntDesign } from '@expo/vector-icons';
import { Column, Flex, View } from "native-base";
import { i18n, LocalizationKey } from "@/Localization";
import { Dimensions} from "react-native";
import { NewsScreenNavigatorProps } from "./NewsContainer";
import { RootScreens } from "..";


const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 375;

export interface NewsProps {
  navigation: NewsScreenNavigatorProps;
}

const images = [
  require("../../../assets/img/News/image7.png"),
  require("../../../assets/img/News/image7.png"),
  require("../../../assets/img/News/image7.png"),
  require("../../../assets/img/News/image7.png"),
  require("../../../assets/img/News/image7.png"),
];

const NewsContainer = styled(Container)`
  justify-content: flex-start;
  height: 100%;
  flex: 1;
`;
const Header = styled.View`
  width: 100%;
  height: 50px;
  top: 0;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const Main = styled.View`
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.Image`
  width: 9%;
  resize-mode: contain;
`;

const ItemContainer = styled.ScrollView`
  height: 2000;
  width: 4000;
  margin-top: 2px;
  display: flex;
  overflow: hidden;
`;

const ButtonContainer = styled.ScrollView`
    display: flex;
    flex-direction: row;
    gap : 8px;
`;

const CustomButton = styled(TouchableOpacity)`
  flex: 1 1 30%;
  height: 0%;
  width: 100px;
  align-items: center;
  justify-content: center;
  background-color: #0D986A;
  margin: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const NewsScreen = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <NewsContainer>
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
        <View style={{ display: "flex", width: 345, alignItems: "flex-start", gap: 70}}>
            <Text style={{color: "#0D986A", fontFamily: "Actor", fontSize: 18, fontStyle: "normal" }}> Tin mới</Text>
        </View>
        <Main>
          {/* <ItemContainer>
            <ButtonContainer>
              <CustomButton>
                <ButtonText>Weather</ButtonText>
              </CustomButton>
              <CustomButton>
                <ButtonText>News</ButtonText>
              </CustomButton>
              <CustomButton>
                <ButtonText>Harvest Season</ButtonText>
              </CustomButton>
              <CustomButton>
                <ButtonText>Days</ButtonText>
              </CustomButton>
              <CustomButton>
                <ButtonText>Month</ButtonText>
              </CustomButton>
            </ButtonContainer>
          </ItemContainer> */}
          <ScrollView horizontal={true}>
            <Pressable>
              <View >
                <Text>Tin tức</Text>
              </View>
            </Pressable>
            <Pressable>
              <View>
                <Text>Mùa vụ</Text>
              </View>
            </Pressable>
            <Pressable>
              <View>
                <Text>Thời tiết</Text>
              </View>
            </Pressable>
            <Pressable>
              <View>
                <Text>Phân bón</Text>
              </View>
            </Pressable>
          </ScrollView>
        </Main>
      </NewsContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default NewsScreen;