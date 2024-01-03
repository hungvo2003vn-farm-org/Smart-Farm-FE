import StatisticScreen from "./StatisticScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
export type StatisticScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.STATISTIC
  >;
const StatisticContainer = ({navigation}:StatisticScreenNavigatorProps) => {
  return <StatisticScreen></StatisticScreen>;
};
export default StatisticContainer;
