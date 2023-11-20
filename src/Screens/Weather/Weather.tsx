import { i18n, LocalizationKey } from "@/Localization";
import React, {useEffect, useState} from "react";
import { FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons} from "@expo/vector-icons";
import { ActivityIndicator, FlatList, View, Text, StyleSheet, Image, Pressable, Dimensions} from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, ScrollView } from "native-base";
import { User } from "@/Services";
import { BackButton } from "@/Components/backbutton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";
import {FontSize, Colors} from "@/Theme"
import {WeatherScreenNavigatorProps} from "./WeatherContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import Moment from 'moment';
import { useLazyGetWeatherQuery } from "@/Services";

const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 375;

let daysOfWeek:{ [index: number] : {day: string} } = {};
daysOfWeek[0] = {day: 'Chủ nhật'};
daysOfWeek[1] = {day: 'Thứ hai'};
daysOfWeek[2] = {day: 'Thứ ba'};
daysOfWeek[3] = {day: 'Thứ tư'};
daysOfWeek[4] = {day: 'Thứ năm'};
daysOfWeek[5] = {day: 'Thứ sáu'};
daysOfWeek[6] = {day: 'Thứ bảy'};

export interface IWeatherProps {
    navigation: WeatherScreenNavigatorProps;
}

export const Weather = (props: {
  onNavigate: (string: RootScreens) => void;
  }) => {
  var moment = require('moment'); // require
  moment().format(); 

  const [weather, setWeather] = useState("Ho%20Chi%20Minh");

  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyGetWeatherQuery();

  useEffect(() => {
    fetchOne(weather);
  }, [fetchOne, weather]);
  
  let currentWeather = {
    temp: data?.current.temp_c.toFixed(),
    condition: {
      text: data?.current.condition.text,
      icon: data?.current.condition.icon,
    },
    precip: data?.current.precip_mm,
    humidity: data?.current.humidity,
    localTime: data?.location.localtime,
  }

  let daysWeather = [];

  for (let i = 0; i < 7; i++) {
    let item = {
      date: data?.forecast.forecastday[i].date,
      max_temp: data?.forecast.forecastday[i].day.maxtemp_c.toFixed(),
      min_temp: data?.forecast.forecastday[i].day.mintemp_c.toFixed(),
      chance_of_rain: data?.forecast.forecastday[i].day.daily_chance_of_rain,
      icon: data?.forecast.forecastday[i].day.condition.icon,
    }
    daysWeather.push(item);
  }
  let hoursWeather = [];
  let counter = 0;
  for (let i = 0; i < 24; i++) {
    if ((moment(currentWeather.localTime).hour() + i) === 24) {counter++};
    let item = {
      hour: String(((moment(currentWeather.localTime).hour() + i) % 24)).padStart(2,'0') + ':00',
      icon: data?.forecast.forecastday[counter].hour[((moment(currentWeather.localTime).hour() + i) % 24)].condition.icon,
      temp: data?.forecast.forecastday[counter].hour[((moment(currentWeather.localTime).hour() + i) % 24)].temp_c.toFixed(),
      chance_of_rain: data?.forecast.forecastday[counter].hour[((moment(currentWeather.localTime).hour() + i) % 24)].chance_of_rain,
    }
    hoursWeather.push(item);
  }
  
  return(
    <SafeAreaView style={{backgroundColor: Colors.AVT_BACKGROUND,}}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.headerBar}>
          <View style={styles.headerBarTitle}>
            <FontAwesome5 name='chevron-left' size={30} color='black' style={{marginLeft: 15}}/>
          </View>
        </View>
        <View style={styles.intro}>
          <View style={{left: 25, marginBottom: 15, marginTop: 15,}}>
            <Text style={styles.title}>Cây Xoài</Text>
          </View>
          <Text style={styles.normalText}>Ngày trồng: 22/08/2022</Text>
          <Text style={styles.normalText}>Địa chỉ: Đồng Nai</Text>
          <Text style={styles.normalText}>Đất: Đất thịt</Text>
          <Text style={styles.normalText}>Diện tích: 2000 m2</Text>
        </View>
        <View style={styles.avt}>
          <Image source={ require("../../../assets/Intersect.png")} style={{height: 300, width: 250}}/>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.leftNavigation}>
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
            <Pressable onPress={() => props.onNavigate(RootScreens.IRRIGATIONMODE)} style={styles.activePress}>
              <View style={styles.cycle}>
                <Entypo name="water" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle}/>
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Chế độ tưới</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.MODEL)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="list-ul" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Mô hình</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.active}>
            <Pressable onPress={() => props.onNavigate(RootScreens.WEATHER)} style={styles.activePress}>
              <View style={styles.activeCycle}>
                <AntDesign name="cloudo" size={24} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.activeContent}>Thời tiết</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.inactive}>
            <Pressable onPress={() => props.onNavigate(RootScreens.HISTORY)} style={styles.activePress}>
              <View style={styles.cycle}>
                <FontAwesome5 name="history" size={20} color={Colors.BOLD_BUTTON} style={styles.iconStyle} />
              </View>
              <View style={styles.intro}>
                <Text style={styles.inactiveContent}>Lịch sử</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.info}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.realTimeWeather}>
                <View style={styles.realTimeWeatherTop}>
                  <View style={styles.realTimeWeatherIcon}>
                    <Image source={{
                      uri: `https:${currentWeather.condition.icon}`
                    }} style={{width: 80, height: 80,}} />
                  </View>
                  <View style={styles.realTimeWeatherInfo}>
                    <Text style={styles.realTempText}>{currentWeather.temp}&#176;</Text>
                    <Text style={styles.realTimeWeatherText}>{currentWeather.condition.text}</Text>
                  </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.realTimeWeatherBottom}>
                  <View style={styles.chanceOfRain}>
                    <Text style={styles.smallText}>Lượng mưa</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5,}}>
                      <Ionicons name='rainy-outline' size={23} color={Colors.BOLD_BUTTON} />
                      <View style={{marginLeft: 5,}}>
                        <Text style={styles.smallText}>{currentWeather.precip} mm</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.humidity}>
                    <Text style={styles.smallText}>Độ ẩm</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5,}}>
                      <Ionicons name='water-outline' size={23} color={Colors.BOLD_BUTTON} />
                      <View style={{marginLeft: 5,}}>
                        <Text style={styles.smallText}>{currentWeather.humidity} %</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.hoursWeather}>
                <Text style={styles.title}>Thời tiết theo giờ</Text>
                <ScrollView horizontal={true} style={styles.hoursScrollView}>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>Bây giờ</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[0].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[0].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[0].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[1].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[1].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[1].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[1].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[2].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[2].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[2].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[2].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[3].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[3].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[3].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[3].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[4].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[4].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[4].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[4].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[5].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[5].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[5].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[5].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[6].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[6].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[6].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[6].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[7].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[7].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[7].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[7].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[8].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[8].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[8].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[8].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[9].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[9].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[9].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[9].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[10].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[10].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[10].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[10].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[11].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[11].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[11].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[11].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[12].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[12].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[12].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[12].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[13].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[13].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[13].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[13].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[14].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[14].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[14].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[14].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[15].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[15].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[15].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[15].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[16].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[16].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[16].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[16].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[17].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[17].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[17].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[17].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[18].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[18].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[18].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[18].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[19].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[19].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[19].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[19].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[20].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[20].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[20].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[20].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[21].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[21].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[21].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[21].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[22].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[22].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[22].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[22].chance_of_rain}% mưa</Text>
                  </View>
                  <View style={styles.hoursWeatherItem}>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[23].hour}</Text>
                    <Image source={{
                      uri: `https:${hoursWeather[23].icon}`
                    }} style={{width: 30, height: 30,}} />
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[23].temp}&#176;</Text>
                    <Text style={{color: Colors.BOLD_BUTTON}}>{hoursWeather[23].chance_of_rain}% mưa</Text>
                  </View>
                </ScrollView>
              </View>
              <View style={styles.daysWeather}>
                <Text style={styles.title}>Thời tiết theo ngày</Text>
                <View style={styles.daysView}>
                  <View style={styles.daysWeatherItem}>
                    <View style={styles.daysWeatherItemLeft}>
                      <Text style={{color: Colors.BOLD_BUTTON}}>Hôm nay</Text>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[0].min_temp}&#176;/{daysWeather[0].max_temp}&#176;</Text>
                    </View>
                    <View style={styles.daysWeatherItemRight}>
                      <Image source={{
                        uri: `https:${daysWeather[0].icon}`
                      }} style={{width: 30, height: 30,}} />
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[0].chance_of_rain}% mưa</Text>
                    </View>
                  </View>
                  <View style={styles.daysWeatherItem}>
                    <View style={styles.daysWeatherItemLeft}>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysOfWeek[moment().day() + 1].day}</Text>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[1].min_temp}&#176;/{daysWeather[1].max_temp}&#176;</Text>
                    </View>
                    <View style={styles.daysWeatherItemRight}>
                      <Image source={{
                          uri: `https:${daysWeather[1].icon}`
                        }} style={{width: 30, height: 30,}} />
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[1].chance_of_rain}% mưa</Text>
                    </View>
                  </View>
                  <View style={styles.daysWeatherItem}>
                    <View style={styles.daysWeatherItemLeft}>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysOfWeek[(moment().day() + 2) % 7].day}</Text>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[2].min_temp}&#176;/{daysWeather[2].max_temp}&#176;</Text>
                    </View>
                    <View style={styles.daysWeatherItemRight}>
                      <Image source={{
                          uri: `https:${daysWeather[2].icon}`
                        }} style={{width: 30, height: 30,}} />
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[2].chance_of_rain}% mưa</Text>
                    </View>
                  </View>
                  <View style={styles.daysWeatherItem}>
                    <View style={styles.daysWeatherItemLeft}>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysOfWeek[(moment().day() + 3) % 7].day}</Text>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[3].min_temp}&#176;/{daysWeather[3].max_temp}&#176;</Text>
                    </View>
                    <View style={styles.daysWeatherItemRight}>
                      <Image source={{
                          uri: `https:${daysWeather[3].icon}`
                        }} style={{width: 30, height: 30,}} />
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[3].chance_of_rain}% mưa</Text>
                    </View>
                  </View>
                  <View style={styles.daysWeatherItem}>
                    <View style={styles.daysWeatherItemLeft}>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysOfWeek[(moment().day() + 4) % 7].day}</Text>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[4].min_temp}&#176;/{daysWeather[4].max_temp}&#176;</Text>
                    </View>
                    <View style={styles.daysWeatherItemRight}>
                      <Image source={{
                          uri: `https:${daysWeather[4].icon}`
                        }} style={{width: 30, height: 30,}} />
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[4].chance_of_rain}% mưa</Text>
                    </View>
                  </View>
                  <View style={styles.daysWeatherItem}>
                    <View style={styles.daysWeatherItemLeft}>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysOfWeek[(moment().day() + 5) % 7].day}</Text>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[5].min_temp}&#176;/{daysWeather[5].max_temp}&#176;</Text>
                    </View>
                    <View style={styles.daysWeatherItemRight}>
                      <Image source={{
                          uri: `https:${daysWeather[5].icon}`
                        }} style={{width: 30, height: 30,}} />
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[5].chance_of_rain}% mưa</Text>
                    </View>
                  </View>
                  <View style={styles.daysWeatherItem}>
                    <View style={styles.daysWeatherItemLeft}>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysOfWeek[(moment().day() + 6) % 7].day}</Text>
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[6].min_temp}&#176;/{daysWeather[6].max_temp}&#176;</Text>
                    </View>
                    <View style={styles.daysWeatherItemRight}>
                      <Image source={{
                          uri: `https:${daysWeather[6].icon}`
                        }} style={{width: 30, height: 30,}} />
                      <Text style={{color: Colors.BOLD_BUTTON}}>{daysWeather[6].chance_of_rain}% mưa</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
        </View>
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

    avt:{
        bottom: '-10%',
        right: '5%', 
        position: 'absolute',
    },

    body:{
        height: '60%',
        flexDirection: 'row',
    },

    intro:{
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
    },

    normalText: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.TINY, 
        fontWeight: '400',
        left: 25,
        marginBottom: 15,
    },

    leftNavigation:{
        width: '25%',
        height: '100%',
        backgroundColor: Colors.BOLD_BACKGROUND,
        flexDirection: 'column',
        borderRadius: 15,
    },
        
    active:{
        backgroundColor: Colors.AVT_BACKGROUND,
        height: '20%',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },   
        
    inactive:{
        height: '20%',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },    
        
    activePress:{
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
        borderWidth: 4,
        borderColor: Colors.BOLD_BUTTON,
        marginTop: 10,
        marginBottom: 10,
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
        marginTop: 10,
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
        alignItems: 'center',
    },

    semiTitle: {
        color: Colors.BOLD_BUTTON, 
        fontSize: FontSize.SEMI_TITLE, 
        fontWeight: '500',
        left: '5%',
        marginTop: '5%',
    },

    smallText: {
      color: Colors.BOLD_BUTTON, 
      fontSize: 14 * screenScale, 
      fontWeight: '500',
    },

    scrollView: {
      backgroundColor: Colors.NORMAL_BACKGROUND,
      width: '90%',
      marginTop: '5%',
      marginBottom: '5%',
      borderRadius: 15,
    },

    realTimeWeather: {
      backgroundColor: Colors.AVT_BACKGROUND,
      margin: '5%',
      borderWidth: 2,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: '3%',
      flexDirection: 'column',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
    },

    realTimeWeatherTop: {
      flexDirection: 'row',
    },

    realTimeWeatherBottom: {
      flexDirection: 'row',
    },

    realTimeWeatherIcon: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    realTimeWeatherInfo: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    realTempText: {
      fontSize: 45 * screenScale,
      color: Colors.BOLD_BUTTON,
    },

    realTimeWeatherText: {
      color: Colors.BOLD_BUTTON, 
      fontSize: 20 * screenScale, 
      fontWeight: '500',
    },

    line: {
      backgroundColor: Colors.BOLD_BUTTON,
      width: '90%',
      height: 5,
      marginTop: '5%',
      marginBottom: '5%',
      borderRadius: 15,
    },

    chanceOfRain: {
      width: '50%',
      alignItems: 'center',
    },

    humidity: {
      width: '50%',
      alignItems: 'center',
    },

    hoursWeather: {
      backgroundColor: Colors.AVT_BACKGROUND,
      margin: '5%',
      borderWidth: 2,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: '3%',
      flexDirection: 'column',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
    },

    hoursScrollView: {
      flexDirection: 'row',
    },

    hoursWeatherItem: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: 5,
      margin: 15,
      marginLeft: 0,
      minWidth: 80,
    },

    daysWeather: {
      backgroundColor: Colors.AVT_BACKGROUND,
      margin: '5%',
      borderWidth: 2,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: '3%',
      flexDirection: 'column',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 3,
        height: 5,
      },
      shadowRadius: 5,
      shadowOpacity: 1.0,
    },

    daysView: {
      flexDirection: 'column',
      marginTop: 15,
    },

    daysWeatherItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 15,
      borderColor: Colors.BOLD_BUTTON,
      padding: 5,
      marginBottom: 15,
    },
    daysWeatherItemLeft: {
      width: '45%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    daysWeatherItemRight: {
      width: '45%',
      justifyContent: 'center',
      alignItems: 'center',
    },
});