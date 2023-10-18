import React from "react"
import { View, Pressable, StyleSheet, Text } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export const BackButton = ({navigation}) =>{
    return (
    <Pressable
    onPress={() => 
      navigation.navigate(route)
    }
  >
    <FontAwesome5 name='chevron-left' size={30} color='black' style={{marginLeft: 15}}/>
  </Pressable>  
    // <View >
    //     <Pressable
    //         onPress={() => null}
    //     >
    //         <FontAwesome5 name='chevron-left' size={30} color='black' style={{marginLeft: 15}}/>
    //     </Pressable> 
    // </View>
    );
}
const styles = StyleSheet.create({
    headerBar: {
        height: 80,
        width: '100%',
        backgroundColor: '#F6E8C3',
        shadowOffset: {
          width: 9,
          height: 9,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        justifyContent: 'flex-end',
        marginBottom: 15
      },
      headerBarTitle: {
        alignItems: 'center',
        flexDirection: 'row',
        // position: 'absolute',
        marginBottom: 10,
      },
});