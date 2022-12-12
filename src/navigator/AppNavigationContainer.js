import React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import AppStackNavigator from './AppStackNavigator';
import SplashStack from './SplashStack';
import LoginScreen from '../appScreens/LoginScreen';
import ForgotScreen from '../appScreens/ForgotScreen';
import HomeScreen from '../appScreens/HomeScreen';
import Register from '../appScreens/Register';
import RegisteredPW from '../appScreens/RegisteredPW';
import ViewDetails from '../appScreens/ViewDetails';
import ANCReport from '../appScreens/ANCReport';

const Stack = createStackNavigator();

let AppStackNavigationContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerMode: 'screen',
      }}
      animation="fade"
      initialRouteName={SplashStack}>
      <Stack.Screen name="SplashStack" component={SplashStack} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisteredPW" component={RegisteredPW} />
      <Stack.Screen name="ViewDetails" component={ViewDetails} />
      <Stack.Screen name="ANCReport" component={ANCReport} />
    </Stack.Navigator>
  );
};

export default AppStackNavigationContainer;
