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
import { TextInput, SubmitButton, Header, ProgressIndicator, Validate } from '../../components';
import styles from './styles';
import { Images } from '../../assets';
import { CheckBox } from 'react-native-elements';
import * as userActions from '../../actions/user-actions-types';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';

const ForgotScreen = props => {
    const [allSelected, setSelected] = useState(false);
    const [email, setEmail] = useState('');
    const [userIdhasFocus, setuserIdhasFocus] = useState(false);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);

    const checkedterm = () => {
        setSelected(!allSelected);
    };

    const onPressSubmit = () => {
        const emailError = Validate('email', email);

        if (emailError) {
            Toast.show(emailError, Toast.SHORT);

            return false;
        } else {
            const data = {
                email: email,
            };

            setLoading(true);

            dispatch(
                userActions.userForogot({
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
                            Toast.show(result.message, Toast.SHORT);
                            props.navigation.navigate('LoginScreen');

                        } else if (result.status === false) {
                            Toast.show(result.message, Toast.SHORT);
                            setLoading(false);
                        } else {
                            setLoading(false);
                            console.log('error==>>', error.messages[0].message);
                            //Toast.show(error.messages[0].message, Toast.SHORT);
                            props.navigation.navigate('LoginScreen');
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

            <Header
                // title={'Stock Info'}
                onPress={() => {
                    props.navigation.goBack();
                }}
            />


            <View style={{}}>


                <ImageBackground source={Images.loginframe} style={{ height: 240, }}>

                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', bottom: '8%' }}>
                        <Image
                            source={Images.logingroup}
                            style={{ alignItems: 'center', justifyContent: 'center', }} />
                    </View>

                </ImageBackground>


            </View>


            <Text style={{ color: '#0F6799', fontSize: 17, fontStyle: 'normal', fontWeight: '600', marginTop: '10%', marginLeft: '5%' }}>Forgot your password</Text>

            <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '10%', marginLeft: '5%' }}>Email ID</Text>


            <TextInput
                style={styles.textinput}
                hasFocus={userIdhasFocus}
                value={email}
                placeholder={'Enter email id'}
                placeholderTextColor={'#000'}
                onBlur={() => setuserIdhasFocus(false)}
                onFocus={() => setuserIdhasFocus(true)}
                onChangeText={setEmail}
                icon={Images.email}
                hide={true}

            />


            <View style={{ alignItems: 'center' }}>
                <SubmitButton
                    style={styles.submitButton}
                    nameStyle={styles.buttonText}
                    buttonName={'Forgot Password'}
                    onPress={onPressSubmit}
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

        </SafeAreaView>
    );
};

export default ForgotScreen;
