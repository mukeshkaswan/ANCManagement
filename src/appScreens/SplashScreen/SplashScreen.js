import React, { useEffect, useState } from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  Platform,
  ImageBackground,
  StatusBar
} from 'react-native';
import { Images } from '../../assets';
import * as userActions from '../../actions/user-actions-types';
import Geolocation from 'react-native-geolocation-service';
import Toast from 'react-native-simple-toast';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

function SplashScreen(props) {

  useEffect(() => {

    setTimeout(() => {
      props.navigation.navigate('LoginScreen');
    }, 2000);

  }, []);



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#106799" translucent={true} />

      <ImageBackground
        source={Images.splash}
        resizeMode={'stretch'}
        style={{ height: '100%', width: '100%', justifyContent: 'center' }}>

      </ImageBackground>
    </SafeAreaView>
  );
}

export default SplashScreen;