import React from "react";
import { ActivityIndicator, FlatList, SectionList, View, Text, StyleSheet, Image, Pressable, TouchableOpacity, Dimensions} from "react-native";
import { FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons} from "@expo/vector-icons";
import {FontSize, Colors} from "@/Theme"
import { RootScreens } from "../Screens/index";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";

const HeaderDetail = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.header}>
      <View style={styles.headerBar}>
        <View style={styles.headerBarTitle}>
          <Pressable onPress={() => navigation.navigate(RootScreens.HOME)}>
            <FontAwesome5 name='chevron-left' size={30} color='black' style={{marginLeft: 15}}/>
          </Pressable>
        </View>
      </View>
      <View style={styles.intro}>
        <View style={{left: 25, marginBottom: 15, marginTop: 15,}}>
          <Text style={styles.title}>Cây Xoài</Text>
        </View>
        <View style={styles.farmInfo}>
          <View>
            <Text style={styles.normalText}>Ngày trồng: 22/08/2022</Text>
            <Text style={styles.normalText}>Địa chỉ: Đồng Nai</Text>
          </View>
          <View>
            <Text style={styles.normalText}>Đất: Đất thịt</Text>
            <Text style={styles.normalText}>Diện tích: 2000 m2</Text>
          </View>
        </View>
      </View>
      <View style={styles.avt}>
        <Image source={ require("../../assets/tree.png")} style={{height: 230, width: 230}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: '50%',
    backgroundColor: Colors.AVT_BACKGROUND,
  },

  headerBar: {
      height: '5%',
      width: '100%',
      backgroundColor: Colors.AVT_BACKGROUND,
      justifyContent: 'flex-end',
      marginBottom: '10%',
  },

  headerBarTitle: {
      alignItems: 'center',
      flexDirection: 'row',
      position: 'absolute',
      top: 20,
  },

  avt:{
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
  },

  intro:{
    width: '100%',
  },

  title: {
    color: Colors.BOLD_BUTTON, 
    fontSize: FontSize.TITLE, 
    fontWeight: '500',
    // left: 25,
    // marginBottom: 15,
    // marginTop: 15,
  },

  normalText: {
    color: Colors.BOLD_BUTTON, 
    fontSize: FontSize.TINY, 
    fontWeight: '400',
    left: 25,
    marginBottom: 15,
  },

  farmInfo: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HeaderDetail;