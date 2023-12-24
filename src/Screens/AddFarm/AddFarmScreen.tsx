import React, { FunctionComponent, useState } from "react";
import { Container } from "@/Components/shared";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView, TextInput } from "react-native";
import BigText from "@/Components/texts/BigText";
import { colors } from "@/Components/colors";
import RegularButton from "@/Components/button/RegularButton";
// import { addItem } from "@/Store/reducers";
import { useDispatch } from "react-redux";
import { TreeItemProps } from "@/Components/item/types";
import {Picker} from '@react-native-picker/picker';

const SubContainer = styled.View`
  height: 60px;
  background-color: ${colors.white};
  margin-horizontal: 10px;
  
  border-radius: 10px;
  margin-vertical: 17px;
`;
const AddFarmScreen: FunctionComponent = () => {
    const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    // const dispatch = useDispatch();
    // const [newItem, setNewItem] = useState<TreeItemProps>({
    //   treeName:'',
    //   model: '',
    //   timeOn: '',
    // });
    // const handleAddItem = () => {
    //   dispatch(addItem(newItem));
    //   setNewItem({
    //     treeName:'',
    //     model: '',
    //     timeOn: '',
    //   });
    // };
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedPlant, setSelectedPlant] = useState('');
  return (
    <SafeAreaView style={{ backgroundColor: "#F9F9F9", flex: 1 }}>
      <SubContainer style={{backgroundColor:"#F9F9F9"}}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={32}
          color="black"
          style={{ alignSelf: "flex-start", marginLeft:3, marginRight:15 }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <BigText textStyles={{ textAlign: "center", fontSize:25 , fontWeight: "300"}}>
          THÔNG TIN NÔNG TRẠI
        </BigText>
      </SubContainer>
      <SubContainer style={{marginTop:30}}>
          <TextInput
            placeholder="Tên nông trại"
            style={{ flexGrow: 1 , padding:10}}
            // value={newItem.treeName}
            // onChangeText={(text) =>
            //   setNewItem({ ...newItem, treeName: text })
            //}
          ></TextInput>
        </SubContainer>
        {/* <SubContainer> */}
          {/* <TextInput
            placeholder="Địa chỉ"
            style={{ flexGrow: 1 , padding:10}}
          ></TextInput>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" /> */}
          <SubContainer>
          <Picker
            selectedValue={selectedLocation}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLocation(itemValue)
            }
            // style={{backgroundColor: colors.white, height: 60, marginVertical: 17, padding: 10, marginHorizontal: 10, borderRadius: 20}}
            style={{ flexGrow: 1 , padding:10}}
            >
            <Picker.Item label="Tp.Hồ Chí Minh"  value="Hồ Chí Minh" />
            <Picker.Item label="Đồng Tháp" value="Đồng " />
          </Picker>
        </SubContainer>
        <SubContainer>
          <Picker
            selectedValue={selectedPlant}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedPlant(itemValue)
            }
            // style={{backgroundColor: colors.white, height: 60, marginVertical: 17, padding: 10, marginHorizontal: 10, borderRadius: 20}}
            style={{ flexGrow: 1 , padding:10}}
            >
            <Picker.Item label="Cây xoài"  value="Cây xoài" />
            <Picker.Item label="Cây cam" value="Cây xoài" />
          </Picker>
        </SubContainer>
        <SubContainer>
          <TextInput
            placeholder="Diện tích"
            style={{ flexGrow: 1 , padding:10}}
            // value={newItem.moisture}
            // onChangeText={(text) =>
            //   setNewItem({ ...newItem, moisture: text })
            // }
          ></TextInput>
          {/* <MaterialIcons name="keyboard-arrow-down" size={24} color="black" /> */}
        </SubContainer>
        <RegularButton
            onPress={() => {
              // handleAddItem
              navigation.goBack();
            }}
            btnStyles={{ marginVertical: 40, width: 130 , alignSelf:'center'}}
            textStyles={{ color: `${colors.white}`, fontSize: 20 }}
          >
            Lưu
        </RegularButton>
    </SafeAreaView>
  );
};
export default AddFarmScreen;
