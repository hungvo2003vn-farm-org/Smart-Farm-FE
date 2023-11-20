import { i18n, LocalizationKey } from "@/Localization";
import React, { useState }  from "react";
import { FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons} from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import {FontSize, Colors} from "@/Theme"
import {ScheduleScreenNavigatorProps} from "./ScheduleContainer";
export interface IScheduleProps {
    navigation: ScheduleScreenNavigatorProps;
    // data: User | undefined;
    // items: Farm;
  }
// export interface IHomeProps {
//   data: User | undefined;
//   isLoading: boolean;
// }

// export const Home = (props: IHomeProps) => {
//   const { data, isLoading } = props;
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       {isLoading ? (
//         <HStack space={2} justifyContent="center">
//           <Spinner accessibilityLabel="Loading posts" />
//           <Heading color="primary.500" fontSize="md">
//             {i18n.t(LocalizationKey.LOADING)}
//           </Heading>
//         </HStack>
//       ) : (
//         <>
//           <Text>{i18n.t(LocalizationKey.HOME)}</Text>
//           <Heading color="primary.500" fontSize="md">
//             {data?.username}
//           </Heading>
//         </>
//       )}
//     </View>
//   );
// };
export const Schedule= (props: {
    onNavigate: (string: RootScreens) => void;
  }) => {
const [modelstatus, setScheduleStatus] = useState(1);
  return(
    <View>
    <View style={styles.headerBar}>
    <View style={styles.headerBarTitle}>

    <FontAwesome5 name='chevron-left' size={30} color='black' style={{marginLeft: 15}}/>
 
    </View>
    </View>
    <View style={styles.avtBackground}>
      <View style={styles.intro}>
        <Text style={styles.title}>Cây Xoài</Text>
        <Text style={styles.normalText}>Ngày trồng: 22/08/2022</Text>
        <Text style={styles.normalText}>Địa chỉ: Đồng Nai</Text>
      </View>
      <View style={styles.avt}>
        <Image source={ require("../../../assets/Intersect.png")} />
      </View>
    </View>
    <View style={styles.body}>
      <View style={styles.rightNavigation}>
        <View style={styles.inactive}>
        <Pressable onPress={() => props.onNavigate(RootScreens.FARMDETAIL)} style={styles.activePress}>
          <View style={styles.cycle}>
          <AntDesign name="info" size={30} color={Colors.BOLD_BUTTON} style={styles.iconStyle}/>
          </View>
          <View style={styles.intro}>
          <Text style={styles.inactiveContent}>Thông tin</Text>
          </View>
        </Pressable>
        </View>
        <View style={styles.inactive}>
        <Pressable onPress={() => props.onNavigate(RootScreens.MODEL)} style={styles.activePress}>
          <View style={styles.cycle}>
          <Entypo name="water" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle}/>
          </View>
          <View style={styles.intro}>
          <Text style={styles.inactiveContent}>Mô hình</Text>
          </View>
          </Pressable>
        </View>
        <View style={styles.active}>
        <Pressable onPress={() => props.onNavigate(RootScreens.SCHEDULE)} style={styles.activePress}>
        <View style={styles.cycle}>
        <FontAwesome5 name="list-ul" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
        </View>
          <View style={styles.intro}>
          <Text style={styles.activeContent}>Lịch trình</Text>
          </View>
        </Pressable>
        </View>
        <View style={styles.inactive}>
        <Pressable onPress={() => props.onNavigate(RootScreens.HISTORY)} style={styles.activePress}>
        <View style={styles.cycle}>
        <FontAwesome5 name="history" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
        </View>
        <View style={styles.intro}>
        <Text style={styles.inactiveContent}>Lịch sử</Text>
        </View>
        </Pressable>
        </View>
      </View>
      <ScrollView>
          <View style={styles.infoColumn}>
            <Pressable onPress={()=>{
                setScheduleStatus(1);
            }} style={(modelstatus==1) ? styles.infoItemRenActive: styles.infoItemRenInactive}>
            <Text style= {styles.itemTitle}>Mô hình năng suất</Text>
            <Text style= {styles.itemBody}>Nguồn: Nhà cung cấp</Text>
            <Text style= {styles.itemBody}>Mô tả: Sử dụng lượng nước phù hợp để tạo ra năng suất tối ưu</Text>
            </Pressable>
          </View>
          <View style={styles.infoColumn}>
          <Pressable onPress={()=>{
                setScheduleStatus(2);
            }} style={(modelstatus==2) ? styles.infoItemRenActive: styles.infoItemRenInactive}>
            <Text style= {styles.itemTitle}>Mô hình cân bằng</Text>
            <Text style= {styles.itemBody}>Nguồn: Nhà cung cấp</Text>
            <Text style= {styles.itemBody}>Mô tả: Sử dụng lượng nước vừa đủ để tạo ra năng suất vừa đủ</Text>
            </Pressable>
          </View>
          <View style={styles.infoColumn}>
          <Pressable onPress={()=>{
                setScheduleStatus(3);
            }} style={(modelstatus==3) ? styles.infoItemRenActive: styles.infoItemRenInactive}>
            <Text style= {styles.itemTitle}>Thủ công</Text>
            <Text style= {styles.itemBody}>Nguồn: Nhà cung cấp</Text>
            <Text style= {styles.itemBody}>Mô tả: Sử dụng lượng nước tiết kiếm, vẫn đảm bảo cây phát triển</Text>
            </Pressable>
          </View>

      </ScrollView> 
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    headerBar: {
        height: '5%',
        width: '100%',
        backgroundColor: Colors.AVT_BACKGROUND,
        justifyContent: 'flex-end',
      },
      headerBarTitle: {
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        marginBottom: 10,
      },
      title: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TITLE, 
        fontWeight: '500',
        left: 25,
        marginBottom: 10,
      },
      normalText: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TINY, 
        fontWeight: '400',
        left: 25,
        marginBottom: 10,
      },
      intro:{
        width: '100%', 
        //position: 'absolute', 
        marginBottom: 10,
      },
      avtBackground: {
        width: '100%', 
        height: '30%', 
        //position: 'absolute', 
        backgroundColor: Colors.AVT_BACKGROUND,        
      },
      avt:{
        bottom: 0,
        right: 0, 
        position: 'absolute',
      },
      rightNavigation:{
        width: '25%',
        height: '75%',
        backgroundColor: Colors.BOLD_BUTTON,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: Colors.BOLD_BACKGROUND,
        borderRadius: 15,
      },
      active:{
        backgroundColor: Colors.AVT_BACKGROUND,
        height: '25%',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
      },
      activePress:{
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
      },
      inactive:{
        height: '25%',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
      },
      cycle:{
        width: 40, 
        height: 40,
        flexDirection: 'column',
        backgroundColor: Colors.AVT_BACKGROUND, 
        borderRadius: 9999, 
        borderWidth: 1,
        borderColor: Colors.BOLD_BACKGROUND,
        marginBottom: 10,
        justifyContent: 'center',
      },
      activeContent: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TINY, 
        fontWeight: '400',
        marginBottom: 10,
        alignSelf: 'center',
      },
      inactiveContent: {
        color: Colors.WHITE, 
        fontSize: FontSize.TINY, 
        fontWeight: '400',
        marginBottom: 10,
        alignSelf: 'center',
      },
      iconStyle: {
        alignSelf: 'center',
      },
      body:{
        flexDirection: 'row',
      },
      infoColumn: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 40,
        marginTop: 20,
      },
      infoItemRenActive: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxHeight: 200, 
        backgroundColor: Colors.NORMAL_BACKGROUND, 
        borderRadius: 12,
        marginBottom: 20,
      },
      infoItemRenInactive: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxHeight: 200,  
        borderRadius: 12,
        marginBottom: 20,
      },
      itemIcon:{
        alignItems: 'flex-start',
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10,
      },
      itemTitle:{
        alignItems: 'flex-start',
        color: Colors.SEMI_TITLE,
        fontSize: FontSize.SMALL,
        marginBottom: 10,
        marginLeft: 10,
      },
      itemBody:{
        maxWidth: 250,
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TINY, 
        fontWeight: '400',
        marginBottom: 10,
        alignItems: 'flex-start',
        marginLeft: 10,
      }
});
