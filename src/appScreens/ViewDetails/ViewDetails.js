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
} from 'react-native';
import { TextInput, SubmitButton, Header, ProgressIndicator, Validate } from '../../components';
import styles from './styles';
import { Images } from '../../assets';
import { CheckBox } from 'react-native-elements';
import * as userActions from '../../actions/user-actions-types';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewDetails = props => {
    const { id,name } = props.route.params.item;

    const [allSelected, setSelected] = useState(false);
    const [email, setEmail] = useState('');
    const [userIdhasFocus, setuserIdhasFocus] = useState(false);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [getRch_ID, setRch_ID] = useState('');
    const [getawc_number, setawc_number] = useState('');
    const [getguardian, setguardian] = useState('');
    const [getphone_number, setphone_number] = useState('');
    const [getblock, setblock] = useState('');
    const [getvillage, setvillage] = useState('');
    const [getward, setward] = useState('');
    const [getLMP, setLMP] = useState('');
    const [getEDD, setEDD] = useState('');
    const [getpregnancy_number, setpregnancy_number] = useState('');
    const [getlast_delivery, setlast_delivery] = useState('');
    const [getasha, setasha] = useState('');
    const [getasha_phone, setasha_phone] = useState('');
    const [getANM, setANM] = useState('');
    const [getANM_phone, setANM_phone] = useState('');


    useFocusEffect(
        React.useCallback(() => {
            getData();
        }, []),
    );


    const getData = async () => {
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
            id: id
        };

        setLoading(true);

        dispatch(
            userActions.AnmDetailPregnantWomen({
                data,
                callback: ({ result, error }) => {
                    console.warn('after get data', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setLoading(false);

                        setRch_ID(result.data.rch_id);
                        setawc_number(result.data.awc_number);
                        setguardian(result.data.guardian);
                        setphone_number(result.data.phone_number);
                        setblock(result.data.block);
                        setvillage(result.data.village);
                        setward(result.data.ward);
                        setLMP(result.data.LMP);
                        setEDD(result.data.EDD);
                        setpregnancy_number(result.data.pregnancy_number);
                        setlast_delivery(result.data.last_delivery);
                        setasha(result.data.asha);
                        setasha_phone(result.data.asha_phone);
                        setANM(result.data.ANM);
                        setANM_phone(result.data.ANM_phone);

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



    return (
        <SafeAreaView
            style={{ flex: 1, }}>
            {/* <CustomStatusBar /> */}
            {isLoading && <ProgressIndicator isLoading={isLoading} />}

            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#106799" translucent={true} />

            <Header
                title={name + ' ' +  'Details'}
                onPress={() => {
                    props.navigation.goBack();
                }}
            />

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ flexDirection: 'column', flex: 1, }}>


                    <View style={{ backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#11689A', borderRadius: 6, marginLeft: 10, marginRight: 10, top: 20 }}>

                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>RCH ID : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getRch_ID}</Text>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>AWC No : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getawc_number}</Text>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>Husband/Father's Name : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getguardian}</Text>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>Contact No : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getphone_number}</Text>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>Block Name : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getblock}</Text>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>Village Name : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getvillage}</Text>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%', marginBottom: 20 }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400', }}>Ward Name : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500', }}>{getward}</Text>

                        </View>




                    </View>





                    <View style={{ marginTop: 20, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#11689A', borderRadius: 6, marginLeft: 10, marginRight: 10, top: 20 }}>

                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>Last Menstrual Period Date : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getLMP}</Text>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>Expected Date of Delivery : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getEDD}</Text>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>No.of Pregnancies: : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getpregnancy_number}</Text>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%', marginBottom: 20 }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>Last Delivery Conducted at : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getlast_delivery}</Text>

                        </View>


                    </View>




                    <View style={{ marginTop: 20, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#11689A', borderRadius: 6, marginLeft: 10, marginRight: 10, top: 20,marginBottom:20 }}>

                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>HWC/APHC/HSC Name : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>N/A</Text>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>ASHA Name : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getasha}</Text>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%' }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>ASHA Contact No : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getasha_phone}</Text>

                        </View>


                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%', }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>ANM Name : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getANM}</Text>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: '5%', marginLeft: '5%', marginBottom: 20 }}>

                            <Text style={{ color: '#2C3033', fontSize: 12, fontWeight: '400' }}>ANM Contact No : </Text>
                            <Text style={{ color: '#11689A', fontSize: 14, fontWeight: '500' }}>{getANM_phone}</Text>

                        </View>





                    </View>



                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default ViewDetails;
