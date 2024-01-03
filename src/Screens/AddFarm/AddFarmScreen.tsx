import React, { FunctionComponent, useState } from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView, TextInput } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list-expo'
import BigText from "@/Components/texts/BigText";
import { colors } from "@/Components/colors";
import RegularButton from "@/Components/button/RegularButton";
// import { router } from 'expo-router';
// import { addItem } from "@/Store/reducers";
import { useDispatch } from "react-redux";

import { addFarmRequest, useCreateFarmMutation } from "@/Services";

const SubContainer = styled.View`
  height: 60px;
  background-color: ${colors.white};
  margin-horizontal: 10px;
  border-radius: 10px;
  margin-vertical: 17px;
`;
const location = [
  { key: 'Tp. Hồ Chí Minh', value: 'Tp. Hồ Chí Minh' },
  { key: 'Đồng Tháp', value: 'Đồng Tháp' },
  {
    key: 'Đồng Nai',
    value: 'Đồng Nai',
  }
]
const plant = [
  { key: 'Cây xoài', value: 'Cây xoài' },
  { key: 'Cây cam', value: 'Cây cam' },

]
const AddFarmScreen = (props:{navigation: any}) => {
  const navigation = props.navigation;
  const [farmCreating, farmCreatingResult] = useCreateFarmMutation();
  const [selectedLocation, setSelectedLocation] = React.useState("");
  const [selectedPlant, setSelectedPlant] = React.useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cultivarId, setCultivarId] = useState(-1);
  const [area, setArea] = useState("");

  const handleFarmNameChange = (e: any) => {
    setName(e);

  };

  const handlePlantChange = (e: any) => {
    setCultivarId(e.id);
  };
  const handleLocationChange = (e: any) => {
    setAddress(e);
  };
  const handleAcraegeChange = (e: any) => {
    setArea(e);
  };
  const handleCreateFarm = async () => {
    try {
      const params: addFarmRequest = {
        name: name,
        address: address,
        description: "Đang cập nhật",
        cultivarId: `${cultivarId}`,
        image: "",
        userId: "",
        modelId: "",
      };

      const response = await farmCreating(params).unwrap();
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.error('Error creating farm:', error);
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#F9F9F9", flex: 1 }}>
      <SubContainer style={{ backgroundColor: "#F9F9F9" }}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={32}
          color="black"
          style={{ alignSelf: "flex-start", marginLeft: 3, marginRight: 15 }}
          onPress={() => {
            // navigation.navigate(0);
            navigation.navigate(getFocusedRouteNameFromRoute(route));
          }}
        />
        <BigText textStyles={{ textAlign: "center", fontSize: 25, fontWeight: "300" }}>
          THÔNG TIN NÔNG TRẠI
        </BigText>
      </SubContainer>
      <SubContainer style={{
        marginTop: 30,
        // borderWidth: 0.5, borderColor: colors.black, borderStyle: 'solid'
      }}>
        <TextInput
          placeholder="Tên nông trại"
          style={{ flexGrow: 1, padding: 10, marginLeft: 10 }}
          value={name}
          onChangeText={handleFarmNameChange}
        ></TextInput>
      </SubContainer>

      <SelectList placeholder="Chọn tỉnh/thành phố" searchPlaceholder="Tìm kiếm" setSelected={(val: string) => setSelectedLocation(val)} onSelect={() => handleLocationChange(selectedLocation)} boxStyles={{ height: 60, marginHorizontal: 10, marginVertical: 17, backgroundColor: colors.white, borderWidth: 0 }} inputStyles={{ alignSelf: 'center' }} data={location} />

      <SelectList placeholder="Chọn loại cây" searchPlaceholder="Tìm kiếm" setSelected={(val: string) => setSelectedPlant(val)} onSelect={() => handlePlantChange(selectedPlant)} boxStyles={{ height: 60, marginHorizontal: 10, marginVertical: 17, backgroundColor: colors.white, borderWidth: 0 }} inputStyles={{ alignSelf: 'center' }} data={plant} />
      <SubContainer>
        <TextInput
          placeholder="Diện tích"
          style={{ flexGrow: 1, padding: 10 }}
          value={area}
          onChangeText={handleAcraegeChange}
        ></TextInput>
        {/* <MaterialIcons name="keyboard-arrow-down" size={24} color="black" /> */}
      </SubContainer>
      <RegularButton
        onPress={() => {
          handleCreateFarm();
          navigation.goBack();
        }}
        btnStyles={{ marginVertical: 40, width: 130, alignSelf: 'center' }}
        textStyles={{ color: `${colors.white}`, fontSize: 20 }}
      >
        Lưu
      </RegularButton>
    </SafeAreaView >
  );
};
export default AddFarmScreen;
