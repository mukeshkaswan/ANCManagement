import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  BackHandler,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  View,
  StatusBar
} from 'react-native';
import styles from './styles';
import { Images } from '../../assets';
import { CheckBox } from 'react-native-elements';
import { TextInput, SubmitButton, Header, ProgressIndicator, Validate,NoInternet } from '../../components';
import * as userActions from '../../actions/user-actions-types';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = props => {
  const [allSelected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [userId, setuserId] = useState('');
  const [hasFocus, setFocus] = useState(false);
  const [userIdhasFocus, setuserIdhasFocus] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [password, setPassword] = useState('');

  const checkedterm = () => {
    setSelected(!allSelected);
  };

  const eyePress = key => () => {
    if (key == 'pass') {
      setIsShow(!isShow);
    }
  };



const getData = async result => {

    try {
      await AsyncStorage.setItem('access_token', result.data.access_token);
      await AsyncStorage.setItem('role', result.data.roles);

    } catch (e) {
      // saving error
    }
    Toast.show(result.message, Toast.SHORT);

    props.navigation.navigate('HomeScreen', {data: result.data});


  }

  const onPressSubmit = () => {


    const emailError = Validate('email', userId);
    const passwordError = Validate('password', password);

    if (emailError || passwordError) {
      Toast.show(emailError || passwordError, Toast.SHORT);

      return false;
    } else {
      const data = {
        username: userId,
        password: password,

      };

      setLoading(true);

      dispatch(
        userActions.useridLogin({
          data,
          callback: ({ result, error }) => {
            if (error) {
              setLoading(false);
              Toast.show('Please try again...', Toast.SHORT);
              return
            }
            if (result.status) {
              setLoading(false);
              console.warn('after login', result.data);
              getData(result);


            } else if (result.status === false) {
              Toast.show(result.message.error[0], Toast.SHORT);
              setLoading(false);
            } else {
              setLoading(false);
              console.log('error==>>', error.messages[0].message);
              //Toast.show(error.messages[0].message, Toast.SHORT);
              // props.navigation.navigate('LoginScreen');
              console.warn(JSON.stringify(error, undefined, 2));
            }
          },
        }),
      );
    }
  };


  return (
    <SafeAreaView
      style={{ flex: 1, }}>
      {/* <CustomStatusBar /> */}
      {isLoading && <ProgressIndicator isLoading={isLoading} />}

      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#106799" translucent={true} />


      <View style={{}}>


        <ImageBackground source={Images.loginframe} style={{ height: 250, marginTop: '1.5%' }}>

          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', bottom: '8%' }}>
            <Image
              source={Images.logingroup}
              style={{ alignItems: 'center', justifyContent: 'center', }} />
          </View>

        </ImageBackground>


      </View>


      <Text style={{ color: '#0F6799', fontSize: 17, fontStyle: 'normal', fontWeight: '600', marginTop: '7%', marginLeft: '5%' }}>Login to your account</Text>

      <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '7%', marginLeft: '5%' }}>Email ID</Text>


      <TextInput
        style={styles.textinput}
        hasFocus={userIdhasFocus}
        value={userId}
        placeholder={'Enter email id'}
        placeholderTextColor={'#000'}
        onBlur={() => setuserIdhasFocus(false)}
        onFocus={() => setuserIdhasFocus(true)}
        onChangeText={setuserId}
        icon={Images.email}
        hide={true}

      />

      <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: 20, marginLeft: 20 }}>Password</Text>

      <TextInput
        style={styles.textinput}
        hasFocus={hasFocus}
        value={password}
        placeholder={'Enter password'}
        placeholderTextColor={'#000'}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        onChangeText={setPassword}
        eyePress={eyePress('pass')}
        isShow={isShow}
        // icon={!isShow ? 'eye-off' : 'eye'}
        icon={Images.lock}
        icons={Images.eye}
        secureTextEntry={!isShow}
        hide={true}

      />


      <View style={styles.checkboxpasswordcontainer}>
        <CheckBox
          title={<Text style={styles.text_}>Let me stay login</Text>}
          checkedIcon={
            <Image
              source={Images.checkbox_select}
              style={styles.checkbox}
            />
          }
          uncheckedIcon={
            <Image
              source={Images.checkbox_unselect}
              style={styles.checkbox}
            />
          }
          checked={allSelected}
          containerStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            padding: 0,
            margin: 0,
          }}
          onPress={checkedterm}
        // onPress={() => setCount(count + 1)}
        />
        <Text
          style={styles.text}

          onPress={() => props.navigation.navigate('ForgotScreen')}
        >
          Forgot Password
        </Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <SubmitButton
          style={styles.submitButton}
          nameStyle={styles.buttonText}
          buttonName={'Sign In'}
          onPress={onPressSubmit}
        //onPress={() => props.navigation.navigate('HomeScreen')}
        // onPress={gotoNavigate('AttendanceScreen')}
        //  onPress={gotoCallApi}
        />
      </View>

      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}>

        <Text style={{ color: '#27272E', fontSize: 13, fontStyle: 'normal', fontWeight: '600', marginTop: '10%', marginLeft: '5%', alignSelf: 'center' }}>Product Developed & Managed by</Text>
        <Text style={{ color: '#11689A', fontSize: 12, fontStyle: 'normal', fontWeight: '600', marginLeft: '5%', alignSelf: 'center' }}>Triazine Software Pvt. Ltd.</Text>
        <Text style={{ color: '#27272E', fontSize: 12, fontStyle: 'normal', fontWeight: '600', marginLeft: '5%', alignSelf: 'center' }}>Phone: +91-120 4275378, 4278215</Text>
        <Text style={{ color: '#27272E', fontSize: 12, fontStyle: 'normal', fontWeight: '600', marginLeft: '5%', alignSelf: 'center' }}>B-28 & 29, 1st Floor, Sector 58, Noida-201301 (Up) India</Text>

      </View>

      <NoInternet />

    </SafeAreaView>
  );
};

export default LoginScreen;
