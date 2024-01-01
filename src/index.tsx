import React from "react";
import * as Localization from "expo-localization";
import { i18n, Language } from "@/Localization";
import { store, persistor } from "@/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApplicationNavigator } from "./Navigation";
import { SplashScreenContainer } from "./Screens/SplashScreen";
import { LoginScreenContainer } from "./Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = Language.ENGLISH;
import { Platform } from "react-native";

import * as TaskManager from 'expo-task-manager';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as BackgroundFetch from 'expo-background-fetch';

const NOTIFICATION_TASK_NAME = 'background-notification-task';

TaskManager.defineTask(NOTIFICATION_TASK_NAME, () => {
  const time = "07:30";
  console.log("time",time);
  const [hours, minutes] = time.split(":");
  console.log("hours",hours, minutes);
  Notifications.scheduleNotificationAsync({
    content: {
      title: hours,
      body: minutes,
    },
    trigger: {
      hour: +hours,
      minute: +minutes,
      repeats: true,
    },
  });
  console.log('a',BackgroundFetch.BackgroundFetchResult.NewData)

  return BackgroundFetch.BackgroundFetchResult.NewData;
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});


async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({projectId: Constants.expoConfig.projectId,})).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}

