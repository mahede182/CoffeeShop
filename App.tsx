/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import SplashScreen from 'react-native-splash-screen'

import React,{useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from  '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// All screen import in here
import IntroScreen from './screens/IntroScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
   }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
