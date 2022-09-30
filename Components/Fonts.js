
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { 
  BungeeShade_400Regular 
} from '@expo-google-fonts/bungee-shade'
import {useFonts} from 'expo-font'

import AppLoading from 'expo-app-loading'








function App() {
  let [fontsLoaded, error]=useFonts({
    BungeeShade_400Regular,
    'BungeeSpice-Regular':require('./assets/fonts/BungeeSpice-Regular.ttf')
  })
  
  
  // if(!fontsLoaded)
  // {
  //   return <AppLoading />
  // }
  
  return (
    <View
    style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}
    >
      <Text
      style={{
        // fontFamily:'BungeeShade_400Regular'
        fontFamily:'BungeeSpice-Regular'
      }}
      >
        App fonts
      </Text>
    </View>
  )}

  export default App;