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
    StatusBar,
    Platform,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, SubmitButton, CustomStatusBar, Header, NoInternet } from '../../components';
import styles from './styles';
import { Images } from '../../assets';
import { CheckBox } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as userActions from '../../actions/user-actions-types';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';

const HomeScreen = props => {
    const { data } = props.route.params;
    const [allSelected, setSelected] = useState(false);
    const [counttotal, setCountTotal] = useState('');
    const [counttotalnoti, setNotiTotal] = useState('');

    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);

    const checkedterm = () => {
        setSelected(!allSelected);
    };

    const gotoNavigate = route => () => {
        props.navigation.navigate(route);
    };

    useFocusEffect(
        React.useCallback(() => {
            getNoti();
            getDash();

            BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

            return () =>
                BackHandler.removeEventListener(
                    'hardwareBackPress',
                    handleBackButtonClick,
                );
        }, []),
    );


    const handleBackButtonClick = () => {
        Alert.alert(
            'ANC',
            'Do you want to exit?',
            [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Yes', onPress: BackHandler.exitApp },
            ],
            { cancelable: false },
        );
        return true;
    };


    const getNoti = async () => {
        var token = '';
        try {
            const value = await AsyncStorage.getItem('access_token');
            if (value !== null) {
                // value previously stored
                token = value;
            }
        } catch (e) {
            // error reading value
        }

        const data = {
            token: token,
        };

        setLoading(true);

        dispatch(
            userActions.CountNotification({
                data,
                callback: ({ result, error }) => {
                    console.warn('after outlet list result data', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setNotiTotal(result.notification_count)
                        setLoading(false);
                    } else if (result.status === false) {
                        setLoading(false);
                    } else if (!error) {
                        console.warn(JSON.stringify(error, undefined, 2));
                        setLoading(false);
                        // Toast.show('Invalid credentials', Toast.SHORT);
                    } else {
                        setLoading(false);
                        //   console.log('error==>>', error.messages[0].message);
                        //  Toast.show(error.messages[0].message, Toast.SHORT);
                        props.navigation.navigate('LoginScreen');
                        console.warn(JSON.stringify(error, undefined, 2));
                    }
                },
            }),
        );
    };


    const getDash = async () => {
        var token = '';
        try {
            const value = await AsyncStorage.getItem('access_token');
            if (value !== null) {
                // value previously stored
                token = value;
            }
        } catch (e) {
            // error reading value
        }

        const data = {
            token: token,
        };

        setLoading(true);

        dispatch(
            userActions.Dashboard({
                data,
                callback: ({ result, error }) => {
                    console.warn('after result', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        //setOutlet(result.results);
                        setCountTotal(result.data)
                        setLoading(false);
                    } else if (result.status === false) {
                        setLoading(false);
                    } else if (!error) {
                        console.warn(JSON.stringify(error, undefined, 2));
                        setLoading(false);
                        // Toast.show('Invalid credentials', Toast.SHORT);
                    } else {
                        setLoading(false);
                        // console.log('error==>>', error.messages[0].message);
                        // Toast.show(error.messages[0].message, Toast.SHORT);
                        props.navigation.navigate('LoginScreen');
                        console.warn(JSON.stringify(error, undefined, 2));
                    }
                },
            }),
        );
    };

    const onClickLogout = () => {
        Alert.alert(
            'ANC',
            'Do you want to logout ?',
            [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Yes', onPress: gotoExit },
            ],
            { cancelable: false },
        );
        return true;
    };


    const gotoExit = async () => {
        try {
            await AsyncStorage.removeItem('access_token');
            await AsyncStorage.removeItem('role');
            Toast.show('Logout Successfully ', Toast.SHORT);
            props.navigation.navigate('LoginScreen');
            return true;
        } catch (exception) {
            return false;
        }
    };

    return (
        <SafeAreaView
            style={{ flex: 1 }}>
            <CustomStatusBar />
            <View
                style={{ flex: 1, backgroundColor: '#00659F' }}>
                <View style={{ flex: 0.2, }}>
                    <View style={{ flexDirection: 'row', padding: 35, alignItems: 'center', marginTop: '3%' }}>

                        <View style={{}}>
                            <Image
                                source={Images.user}
                                style={{ alignItems: 'center', justifyContent: 'center', }} />
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginLeft: 10, color: '#FFFFFF', fontSize: 16, fontStyle: 'normal', fontWeight: '400', }}>Welcome,</Text>
                            <Text style={{ marginLeft: 10, color: '#FFFFFF', fontSize: 18, fontStyle: 'normal', fontWeight: '600', }}>{data.username}</Text>

                        </View>

                        <View style={{
                            position: 'absolute',
                            right: 55,
                            alignSelf: 'flex-end',
                            top: 32,
                        }}>
                            {/* <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Reminders');
              }}>
              <Image source={Images.search} style={styles.inbox_iconreminder} />
            </TouchableOpacity> */}

                            <TouchableOpacity
                            //   onPress={() => {
                            //     props.navigation.navigate('Reminders');
                            //   }}
                            >
                                <Image
                                    source={Images.notification}
                                    style={{
                                        marginRight: 5,
                                        marginTop: 12,
                                    }}
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    position: 'absolute',
                                    marginTop: Platform.OS == 'ios' ? 2 : 5,
                                    right: 5,
                                    alignSelf: 'flex-end',
                                    borderRadius: 15,
                                    backgroundColor: '#FFFFFF',
                                    width: Platform.OS == 'ios' ? 16 : 16,
                                    height: Platform.OS == 'ios' ? 16 : 16,
                                }}>
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: 10,
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        marginTop: Platform.OS == 'ios' ? 2 : 0,
                                    }}>
                                    {' '}
                                    {counttotalnoti}{' '}
                                </Text>
                            </View>
                        </View>


                        <TouchableOpacity
                            onPress={onClickLogout}

                            style={{
                                position: 'absolute',
                                right: 5,
                                alignSelf: 'flex-end',
                                top: 30,
                            }}>
                            <View>

                                <Image
                                    source={Images.log}
                                    style={{
                                        marginRight: 0,
                                        marginTop: 15,
                                        height: 26,
                                        width: 26,
                                        right: 10,
                                    }}
                                />

                            </View>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={{ flex: 1, backgroundColor: '#FFFFFF', borderTopLeftRadius: 30, borderTopRightRadius: 30, }}>



                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', bottom: '1%' }}>
                        <Image
                            source={Images.women}
                            style={{ alignItems: 'center', justifyContent: 'center', }} />
                    </View>

                    <Text style={{ color: '#27272E', fontSize: 40, fontStyle: 'normal', fontWeight: '800', marginTop: '5%', marginLeft: '5%', alignSelf: 'center' }}>{counttotal}</Text>

                    <Text style={{ color: '#27272E', fontSize: 18, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%', alignSelf: 'center' }}>Total No. of Registered Pregnent Women</Text>

                    <View style={{ alignItems: 'center' }}>
                        <SubmitButton
                            style={styles.submitButton}
                            nameStyle={styles.buttonText}
                            buttonName={'View Details'}
                            onPress={gotoNavigate('RegisteredPW')}

                        />
                    </View>


                    <View style={{ alignItems: 'center' }}>
                        <SubmitButton
                            style={styles.submitButton_}
                            nameStyle={styles.buttonText}
                            buttonName={'+Register Pregnent Women'}
                            onPress={gotoNavigate('Register')}
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

                </View>
            </View>

            <NoInternet />

        </SafeAreaView>
    );
};

export default HomeScreen;
