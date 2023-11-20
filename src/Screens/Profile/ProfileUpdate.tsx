import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../../Components/shared";
import { colors } from "../../Components/colors";
import RegularText from "@/Components/texts/RegularText";
import userImage from "../../../assets//bg/UserImage.png";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import RegularButton from "@/Components/button/RegularButton";
import { SafeAreaView, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RootScreens } from "..";

const ProfileUpdateScreenContainer = styled(Container)`
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  background-color: "#F9F9F9";
  flex-direction: col;
`;
const SubContainer = styled.View`
  height: 54px;
  background-color: white;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  margin-horizontal: 10px;
  padding: 10px;
  border-radius: 10px;
  margin-vertical: 17px;
`;
const UserImageContainer = styled.Image`
  width: 30%;
  height: 15%;
  resize-mode: contain;
  border-radius: 50%;
  margin-top: 30px;
  margin-bottom: 21px;
`;
const Wrapper = styled.View`
  margin-horizontal: 30px;
  flex-direction: row;
`;
const Divider = styled.View`
  width: 2px;
  height: 100%;
  margin-vertical: 1px;
  margin-horizontal: 10px;
  background-color: ${colors.gray};
  border-radius: 10px;
`;
const ProfileUpdateScreen: FunctionComponent = () => {
  const navigaiton =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={{ backgroundColor: "#F9F9F9", flex: 1 }}>
      <ProfileUpdateScreenContainer>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={32}
          color="black"
          style={{ alignSelf: "flex-start", margin: 10 }}
          onPress={() => {
            navigaiton.goBack();
          }}
        />
        <UserImageContainer source={userImage}></UserImageContainer>
        <RegularText textStyles={{ color: `${colors.black}`, fontSize: 20 }}>
          Trần Văn A
        </RegularText>
        <SubContainer>
          <TextInput placeholder="Họ" style={{ flexGrow: 1 }}></TextInput>
        </SubContainer>
        <SubContainer>
          <TextInput placeholder="Tên" style={{ flexGrow: 1 }}></TextInput>
        </SubContainer>
        <SubContainer>
          <Feather
            name="phone"
            size={24}
            color="gray"
            style={{ marginLeft: 2 }}
          />
          <Divider></Divider>
          <TextInput
            placeholder="Số điện thoại"
            style={{ flexGrow: 1 }}
          ></TextInput>
        </SubContainer>
        <SubContainer>
          <TextInput
            placeholder="Giới tính"
            style={{ flexGrow: 1 }}
          ></TextInput>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </SubContainer>
        <SubContainer>
          <TextInput
            placeholder="Ngày sinh"
            style={{ flexGrow: 1 }}
          ></TextInput>
          <AntDesign name="calendar" size={24} color="black" />
        </SubContainer>
        <Wrapper>
          <RegularButton
            onPress={() => {
              navigaiton.goBack();
            }}
            btnStyles={{ marginTop: 20, flexGrow: 1 }}
            textStyles={{ color: `${colors.white}`, fontSize: 20 }}
          >
            Cập nhật
          </RegularButton>
        </Wrapper>
      </ProfileUpdateScreenContainer>
    </SafeAreaView>
  );
};
export default ProfileUpdateScreen;
