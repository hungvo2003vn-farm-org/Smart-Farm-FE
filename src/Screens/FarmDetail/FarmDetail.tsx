import { i18n, LocalizationKey } from "@/Localization";
import React, { useEffect, useState } from "react";
import { FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, FlatList, View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, ScrollView } from "native-base";
import { User } from "@/Services";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import { FontSize, Colors } from "@/Theme"
import { FarmDetailScreenNavigatorProps } from "./FarmDetailContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import { LineChart } from 'react-native-chart-kit';
export interface IFarmDetailProps {
  navigation: FarmDetailScreenNavigatorProps;
}

export const FarmDetail = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  const [indexBtn, setIndexBtn] = React.useState(0);
  const groupBtn = [
    'Ngày',
    'Tuần',
    'Tháng',
  ]
  //Handle press change chart
  const handlePress = (index: number) => {
    setIndexBtn(index);
    if (index === 0) {
      setDataSet(dataDate)
    } else if (index === 1) {
      setDataSet(dataWeek);
    } else if (index === 2) {
      setDataSet(dataMonth);
    }

  }

  const dataDate = [
    {
      labels: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
      datasets: [
        {
          data: [20, 22, 25, 28, 30, 28], // Example temperature data
        },
      ],
    },
    {
      labels: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
      datasets: [
        {
          data: [60, 22, 70, 28, 90, 28], // Example Humid data
        },
      ],
    }
  ];
  const dataWeek = [
    {
      labels: ['Mon', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [32, 31, 43, 32, 23, 43], // Example temperature data
        },
      ],
    },
    {
      labels: ['Mon', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [10, 22, 70, 28, 20, 28], // Example Humid data
        },
      ],
    }
  ];
  const dataMonth = [
    {
      labels: ['1', '5', '10', '20', '25', '27'],
      datasets: [
        {
          data: [32, 31, 43, 32, 23, 43], // Example temperature data
        },
      ],
    },
    {
      labels: ['1', '5', '10', '20', '25', '27'],
      datasets: [
        {
          data: [60, 22, 70, 28, 90, 28], // Example Humid data
        },
      ],
    }
  ];
  //Set state when choosing a dataset
  const [dataSet, setDataSet] = React.useState(dataDate);

  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Line color
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
  };
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerBar}>
          <View style={styles.headerBarTitle}>
            <FontAwesome5 name='chevron-left' size={30} color='black' style={{ marginLeft: 15 }} />
          </View>
        </View>
        <View style={styles.intro}>
          <Text style={styles.title}>Cây Xoài</Text>
          <Text style={styles.normalText}>Ngày trồng: 22/08/2022</Text>
          <Text style={styles.normalText}>Địa chỉ: Đồng Nai</Text>
          <Text style={styles.normalText}>Đất: Đất thịt</Text>
          <Text style={styles.normalText}>Diện tích: 2000 m2</Text>
        </View>
        <View style={styles.avt}>
          <Image source={require("../../../assets/Intersect.png")} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.leftNavigation}>
          <View style={styles.active}>
            <Pressable onPress={() => props.onNavigate(RootScreens.FARMDETAIL)} style={styles.activePress}>
              <View style={styles.activeCycle}>
                <AntDesign name="info" size={30} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.activeContent}>Thông tin</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.MODEL)} style={styles.activePress}>
              <View style={styles.cycle}>
                <Entypo name="water" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Mô hình</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.SCHEDULE)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="list-ul" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Lịch trình</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.WEATHER)} style={styles.activePress}>
              <View style={styles.cycle}>
                <AntDesign name="cloudo" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Thời tiết</Text>
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
          <View style={{alignItems:'center'}}>

            <View style={{ flexDirection: 'row',marginTop:'5%' }}>

              {groupBtn.map((btn, index) => {

                return (
                  <TouchableOpacity key={index} onPress={() => handlePress(index)} style={index === indexBtn ? styles.groupBtnSelected : styles.groupBtn}>
                    <Text style={index === indexBtn ? styles.titleBtnSelect : styles.titleBtn}>{btn}</Text>
                  </TouchableOpacity>

                )
              })}

            </View>
            <Text style={styles.chartTitle}>Nhiệt độ</Text>
            <View style={{}}>
              <LineChart
                data={dataSet['0']}
                width={300}
                height={200}
                chartConfig={chartConfig}
                bezier
                style={{}}
              />
            </View>
            <Text style={styles.chartTitle}>Độ ẩm</Text>
            <View style={{}}>
              <LineChart
                data={dataSet['1']}
                width={300}
                height={200}
                chartConfig={chartConfig}
                bezier
                style={{}}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  header: {
    height: '40%',
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

  avt: {
    bottom: '-10%',
    right: '5%',
    position: 'absolute',
  },

  body: {
    height: '60%',
    flexDirection: 'row',
  },

  intro: {
    width: '100%',
  },

  large: {
    color: Colors.BOLD_BUTTON,
    fontSize: FontSize.TITLE,
    fontWeight: '500',
    left: 25,
    marginBottom: 15,
    marginTop: 15,
  },

  title: {
    color: Colors.BOLD_BUTTON,
    fontSize: FontSize.TITLE,
    fontWeight: '500',
    left: 25,
    marginBottom: 15,
    marginTop: 15,
  },

  normalText: {
    color: Colors.BOLD_BUTTON,
    fontSize: FontSize.TINY,
    fontWeight: '400',
    left: 25,
    marginBottom: 15,
  },

  leftNavigation: {
    width: '25%',
    height: '100%',
    backgroundColor: Colors.BOLD_BACKGROUND,
    flexDirection: 'column',
    borderRadius: 15,
  },

  active: {
    backgroundColor: Colors.AVT_BACKGROUND,
    height: '20%',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  inactive: {
    height: '20%',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },

  activePress: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeCycle: {
    width: 40,
    height: 40,
    flexDirection: 'column',
    backgroundColor: Colors.AVT_BACKGROUND,
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: Colors.BOLD_BUTTON,
    marginBottom: 10,
    justifyContent: 'center',
  },

  cycle: {
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
    fontSize: FontSize.SMALL,
    fontWeight: '400',
    marginBottom: 10,
    alignSelf: 'center',
  },

  inactiveContent: {
    color: Colors.WHITE,
    fontSize: FontSize.SMALL,
    fontWeight: '400',
    marginBottom: 10,
    alignSelf: 'center',
  },

  iconStyle: {
    alignSelf: 'center',
  },

  info: {
    width: '75%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  semiTitle: {
    color: Colors.BOLD_BUTTON,
    fontSize: FontSize.SEMI_TITLE,
    fontWeight: '500',
    left: '5%',
    marginTop: '5%',
  },
  chartTitle: {
    color: Colors.BOLD_BUTTON,
    fontSize: FontSize.SEMI_TITLE,
    fontWeight: '500',
    marginTop: '5%',
    marginBottom: '5%',
  },
  liveWeather: {
    backgroundColor: Colors.BOLD_BACKGROUND,
    width: '90%',
    height: '23%',
    top: '5%',
    left: '5%',
    marginBottom: '5%',
    borderRadius: 15,
  },

  weatherForecast: {
    backgroundColor: Colors.BOLD_BACKGROUND,
    width: '90%',
    height: '23%',
    left: '5%',
    marginTop: '5%',
    borderRadius: 15,
  },
  titleBtn:{
    fontSize:20,
    fontWeight: '500',
    color: Colors.BOLD_BUTTON,
  },
  titleBtnSelect:{
    fontSize:20,
    fontWeight: '500',
    color: '#ffffff',
  },
  groupBtn: {
    borderColor: 'green',
    borderWidth: 1,
    padding: 4,
    alignItems: 'center',
  },
  groupBtnSelected: {
    borderColor: 'green',
    borderWidth: 1,
    padding: 4,
    alignItems: 'center',
    backgroundColor: Colors.BOLD_BUTTON,
  }
});