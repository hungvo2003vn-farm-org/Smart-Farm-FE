import AddFarmScreen from "./AddFarmScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
export type AddFarmScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.ADDFARM
  >;
const AddFarmScreenContainer = ({navigation}: AddFarmScreenNavigatorProps) =>{
    return <AddFarmScreen navigation={navigation}></AddFarmScreen>
}
export default AddFarmScreenContainer;