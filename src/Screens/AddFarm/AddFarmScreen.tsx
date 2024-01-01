import React, { FunctionComponent, useState } from "react";
import { Container } from "@/Components/shared";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView, TextInput } from "react-native";
import {SelectList} from 'react-native-dropdown-select-list-expo'
import BigText from "@/Components/texts/BigText";
import { colors } from "@/Components/colors";
import RegularButton from "@/Components/button/RegularButton";
// import { addItem } from "@/Store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { TreeItemProps } from "@/Components/item/types";
import {Picker} from '@react-native-picker/picker';
import { addFarm, updateInputAcraege, updateInputFarmName, updateInputLocation, updateInputPlant } from "@/Store/reducers/farm";
import { border } from "native-base/lib/typescript/theme/styled-system";

const SubContainer = styled.View`
  height: 60px;
  background-color: ${colors.white};
  margin-horizontal: 10px;
  border-radius: 10px;
  margin-vertical: 17px;
`;
const location = [
  {key:'Tp. Hồ Chí Minh', value:'Tp. Hồ Chí Minh'},
  {key:'Đồng Tháp', value:'Đồng Tháp'},
]
const plant = [
  {key:'Cây xoài', value:'Cây xoài'},
  {key:'Cây cam', value:'Cây cam'},
]
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
    const dispatch = useDispatch();
    // const [selectedLocation, setSelectedLocation] = useState('');
    // const [selectedPlant, setSelectedPlant] = useState('');
    // const [area, setArea] = useState('');
    // const [name, setName] = useState('');

    const [selectedLocation, setSelectedLocation] = React.useState("");
    const [selectedPlant, setSelectedPlant] = React.useState("");
    const inputFarmName = useSelector((state) => state.farm.inputFarmName);
    const inputPlant = useSelector((state) => state.farm.inputPlant);
    const inputLocation = useSelector((state) => state.farm.inputLocation);
    const inputAcraege = useSelector((state) => state.farm.inputAcraege);
    const handleFarmNameChange = (e) => {
      dispatch(updateInputFarmName(e));
    };
  
    const handlePlantChange = (e) => {
      // setSelectedPlant(e);
      dispatch(updateInputPlant(e));
    };
    const handleLocationChange = (e) => {
      // setSelectedLocation(e); 
      dispatch(updateInputLocation(e));
    };
    const handleAcraegeChange = (e) => {
      dispatch(updateInputAcraege(e));
    };
    
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
      <SubContainer style={{
        marginTop:30, 
        // borderWidth: 0.5, borderColor: colors.black, borderStyle: 'solid'
        }}>
          <TextInput
            placeholder="Tên nông trại"
            style={{ flexGrow: 1 , padding:10, marginLeft: 10}}
            value={inputFarmName}
            onChangeText= {handleFarmNameChange}
          ></TextInput>
        </SubContainer>
        {/* <SubContainer> */}
          {/* <TextInput
            placeholder="Địa chỉ"
            style={{ flexGrow: 1 , padding:10}}
          ></TextInput>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" /> */}
          {/* <SubContainer> */}
          {/* <Picker
            selectedValue={inputLocation}
            onValueChange={(itemValue, itemIndex) =>(handleLocationChange(itemValue))}
            // style={{backgroundColor: colors.white, height: 60, marginVertical: 17, padding: 10, marginHorizontal: 10, borderRadius: 20}}
            style={{ flexGrow: 1 , padding:10}}
            >
            <Picker.Item label="Tp.Hồ Chí Minh"  value="Tp.Hồ Chí Minh" />
            <Picker.Item label="Đồng Tháp" value="Đồng Tháp" />
          </Picker> */}
            <SelectList placeholder="Chọn tỉnh/thành phố" searchPlaceholder= "Tìm kiếm" setSelected={(val) => setSelectedLocation(val)} onSelect={() =>handleLocationChange(selectedLocation)} boxStyles={{height: 60, marginHorizontal: 10, marginVertical: 17, backgroundColor:  colors.white, borderWidth:0}} inputStyles= {{alignSelf: 'center'}} data={location}  />
        {/* </SubContainer> */}
        {/* <SubContainer>
          <Picker
            selectedValue={inputPlant}
            // selectedValue={inputPlant}
            onValueChange={(itemValue, itemIndex) =>( handlePlantChange(itemValue))}
            // style={{backgroundColor: colors.white, height: 60, marginVertical: 17, padding: 10, marginHorizontal: 10, borderRadius: 20}}
            style={{ flexGrow: 1 , padding:10}}
            >
            <Picker.Item label="Cây cam" value="Cây cam" />
            <Picker.Item label="Cây xoài"  value="Cây xoài" />
          </Picker>
        </SubContainer> */}
        <SelectList placeholder="Chọn loại cây" searchPlaceholder= "Tìm kiếm" setSelected={(val) => setSelectedPlant(val)} onSelect={() =>handlePlantChange(selectedPlant)} boxStyles={{height: 60, marginHorizontal: 10, marginVertical: 17, backgroundColor:  colors.white, borderWidth:0}} inputStyles= {{alignSelf: 'center'}} data={plant}  />
        <SubContainer>
          <TextInput
            placeholder="Diện tích"
            style={{ flexGrow: 1 , padding:10}}
            value={inputAcraege}
            onChangeText= {handleAcraegeChange}
          ></TextInput>
          {/* <MaterialIcons name="keyboard-arrow-down" size={24} color="black" /> */}
        </SubContainer>
        <RegularButton
            onPress={() => {
              dispatch(addFarm())
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
