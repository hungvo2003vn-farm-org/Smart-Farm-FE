import React, { FunctionComponent, useEffect, useState } from "react";
import { Container } from "@/Components/shared";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView, TextInput } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list-expo'
import BigText from "@/Components/texts/BigText";
import { colors } from "@/Components/colors";
import RegularButton from "@/Components/button/RegularButton";
// import { addItem } from "@/Store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { TreeItemProps } from "@/Components/item/types";
import { Picker } from '@react-native-picker/picker';
import { addFarm, updateInputAcraege, updateInputFarmName, updateInputLocation, updateInputPlant } from "@/Store/reducers/farm";
import { border } from "native-base/lib/typescript/theme/styled-system";
import { addFarmRequest, useCreateFarmMutation, useLazyGetPlantQuery, useUpdatePlantFarmMutation } from "@/Services";
import { View,Text } from "native-base";

const SubContainer = styled.View`
  height: 60px;
  background-color: ${colors.white};
  margin-horizontal: 10px;
  border-radius: 10px;
  margin-vertical: 17px;
`;
// const location = [
//     { key: 'Tp. Hồ Chí Minh', value: 'Tp. Hồ Chí Minh' },
//     { key: 'Đồng Tháp', value: 'Đồng Tháp' },
// ]
const plant2 = [
    { key: 'Cây xoài', value: 'Cây xoài' },
    { key: 'Cây cam', value: 'Cây cam' },
]
const AddFarmScreen: FunctionComponent = () => {
    const [errorName, setErrorName] = useState("");
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const dispatch = useDispatch();
    const [selectedLocation, setSelectedLocation] = React.useState("");
    const [selectedPlant, setSelectedPlant] = useState("");
    const inputFarmName = useSelector((state) => state.farm.inputFarmName);
    const inputPlant = useSelector((state) => state.farm.inputPlant);
    const inputLocation = useSelector((state) => state.farm.inputLocation);
    const inputAcraege = useSelector((state) => state.farm.inputAcraege);
    const userId = useSelector((state) => state.profile.id);
    const [cultivarId, setCultivarId] = useState("");
    const [plant,setData] = React.useState([]);
    const [addCultivar, cutivalRes]  = useUpdatePlantFarmMutation();
    const [farmCreating, farmCreatingResult] = useCreateFarmMutation();
    const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] = useLazyGetPlantQuery();
    // const farmlist = useSelector((state) => state.farm.farmlist);
    const handleFetch = async () => {
      await fetchOne();
    }
    useEffect(() => {
      handleFetch();
      console.log('Fetching', data)
      if (isSuccess) {
        // console.log(data);
        // dispatch(updateFarmList(data));
        let newArray = data.map((item) => {
            return {key: item.id, value: item.name}
          })
          //Set Data Variable
          setData(newArray)
      }
    }, [isSuccess]);
  
  
  
    if(isFetching){
      return <View></View>
    }
    const handleFarmNameChange = (e) => {
        dispatch(updateInputFarmName(e));
        if(e.length < 1) {
            setErrorName("Tên nông trại không để trống");
        } else {
            setErrorName("");
        }
    };

    const handlePlantChange = (e) => {
        // setSelectedPlant(e);
        dispatch(updateInputPlant(e));
    };
    const handleLocationChange = (e) => {
        // setSelectedLocation(e); 
        dispatch(updateInputLocation(e));
    };
    // const handleAcraegeChange = (e) => {
    //     dispatch(updateInputAcraege(e));
    // };

    const handleCreateFarm = async () => {
        // const indexCulture = data.findIndex(
        //     (task) => task.id === cultivarId
        //   );
        try {
            console.log("createFarm", selectedPlant, cultivarId);
            const params = {
                name: inputFarmName,
                address: inputLocation,
                description: "Đang cập nhật",
                cultivarId: cultivarId,
                image: "",
                userId: userId,
                modelId: "models_41986fa4-312a-4487-9161-22245ae577b1",
            };

            const response = await farmCreating(params).unwrap();
            if (response) {
            //     const params1 = {
            //         cultivar: cultivarId,
            //         userId: userId,
            //     };
            //     const id = response.id;
                // const cultivar = cultivarId;
                // const user = userId;
                // const response2 = await addCultivar({id, params1}).unwrap();
                // if (response2) {
                    dispatch(addFarm(response));
                    console.log(response);
                }
            // }
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
                        navigation.goBack();
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
                <View style={{ flexDirection: 'column',  justifyContent: 'flex-start' }}>
                    <TextInput
                        placeholder="Tên nông trại"
                        style={{ flexGrow: 1, padding: 10, marginLeft: 10, marginBottom: 15}}
                        value={inputFarmName}
                        onChangeText={handleFarmNameChange}
                    //validations

                    ></TextInput>
                    {errorName !== '' && <Text style={{ color: 'red' }}>{errorName}</Text>}
                </View>
            </SubContainer>

            <SubContainer style={{
                marginTop: 30,
                // borderWidth: 0.5, borderColor: colors.black, borderStyle: 'solid'
            }}>
                <View style={{ flexDirection: 'column',  justifyContent: 'flex-start' }}>
                    <TextInput
                        placeholder="Tỉnh/ thành phố"
                        style={{ flexGrow: 1, padding: 10, marginLeft: 10, marginBottom: 15}}
                        value={inputLocation}
                        onChangeText={handleLocationChange}
                    //validations

                    ></TextInput>
                </View>
            </SubContainer>

            {/* <SelectList placeholder="Chọn tỉnh/thành phố" searchPlaceholder="Tìm kiếm" setSelected={(val) => setSelectedLocation(val)} onSelect={() => handleLocationChange(selectedLocation)} boxStyles={{ height: 60, marginHorizontal: 10, marginVertical: 17, backgroundColor: colors.white, borderWidth: 0 }} inputStyles={{ alignSelf: 'center' }} data={location} /> */}
            {isSuccess ?
            <SelectList placeholder="Chọn loại cây" searchPlaceholder="Tìm kiếm" setSelected={(key, value) => {setSelectedPlant(value); setCultivarId(key)}} onSelect={() => handlePlantChange(cultivarId)} boxStyles={{ height: 60, marginHorizontal: 10, marginVertical: 17, backgroundColor: colors.white, borderWidth: 0 }} inputStyles={{ alignSelf: 'center' }} data={plant} /> :
            <SelectList placeholder="Chọn loại cây" searchPlaceholder="Tìm kiếm" setSelected={(val) => setSelectedPlant(val)} onSelect={() => handlePlantChange(selectedPlant)} boxStyles={{ height: 60, marginHorizontal: 10, marginVertical: 17, backgroundColor: colors.white, borderWidth: 0 }} inputStyles={{ alignSelf: 'center' }} data={plant2} />
            }
            {/* <SubContainer>
                <TextInput
                    placeholder="Diện tích"
                    style={{ flexGrow: 1, padding: 10 }}
                    value={inputAcraege}
                    onChangeText={handleAcraegeChange}
                ></TextInput>
            </SubContainer> */}
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
        </SafeAreaView>
    );
};
export default AddFarmScreen;
