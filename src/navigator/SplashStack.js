import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../appScreens/SplashScreen';

const Stack = createStackNavigator();

const SplashStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, headerMode: 'screen'}}
      initialRouteName={'SplashScreen'}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default SplashStack;
