import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../appScreens/LoginScreen';
import SplashScreen from '../appScreens/SplashScreen';
import ForgotScreen from '../appScreens/ForgotScreen';
import HomeScreen from '../appScreens/HomeScreen';
import Register from '../appScreens/Register';
import RegisteredPW from '../appScreens/RegisteredPW';
import ViewDetails from '../appScreens/ViewDetails';
import ANCReport from '../appScreens/ANCReport';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={LoginScreen}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisteredPW" component={RegisteredPW} />
      <Stack.Screen name="ViewDetails" component={ViewDetails} />
      <Stack.Screen name="ANCReport" component={ANCReport} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
