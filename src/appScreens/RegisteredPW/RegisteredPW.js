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
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { TextInput, SubmitButton, Header, ProgressIndicator, Validate ,TextInputs} from '../../components';
import styles from './styles';
import { Images } from '../../assets';
import { CheckBox } from 'react-native-elements';
import * as userActions from '../../actions/user-actions-types';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import DateTimePicker from '@react-native-community/datetimepicker';
const {width, height} = Dimensions.get('window');

const RegisteredPW = props => {

    const [allSelected, setSelected] = useState(false);
    const [email, setEmail] = useState('');
    const [userIdhasFocus, setuserIdhasFocus] = useState(false);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [getdata, setData] = useState([]);



    const [date, setDate] = useState(new Date());
    const [date_copy, setDate_Copy] = useState('');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const [date2, setDate2] = useState(new Date());
    const [date_copy2, setDate_Copy2] = useState('');
    const [mode2, setMode2] = useState('date');
    const [show2, setShow2] = useState(false);

    const gotoNavigate = (route, item) => () => {
        props.navigation.navigate(route, { item });
    };

    const gotoSubmit = () => () => {

        if (date_copy == '') {
            // alert("Please select start date");
            Toast.show('Please select start date', Toast.SHORT);

        }
        else if (date_copy2 == '') {
            //  alert("Please select end date");
            Toast.show('Please select end date', Toast.SHORT);

        }
        else if (date_copy > date_copy2) {
            // alert("End date should be greater than start date");
            Toast.show('End date should be greater than start date', Toast.SHORT);

        } else {
            getDataSearch();
            //   var obj ={date:this.state.date,date_End:this.state.date_End};
            //   this.props.getData(obj);
            /* const getDataAction = this.props.getData;
            console.log(getDataAction);
              getDataAction(obj);*/
        }
        // console.log('huy')
        // props.navigation.navigate(route, { item });
    };

    const gotoReset = () => () => {
        console.log('bye')
        setDate_Copy('');
        setDate_Copy2('');
        getData();
        //  props.navigation.navigate(route, { item });
    };


    useFocusEffect(
        React.useCallback(() => {
            getData();
        }, []),
    );


    ////// Date Picker

    const onChange = (event, selectedDate) => {


        const currentDate = selectedDate || date;

        setShow(Platform.OS === 'ios');

        if (event.type == 'set') {
            //ok button
            setDate(currentDate);
            //  setShow(Platform.OS !== 'ios'); // to show time

        } else {
            return false;
            //   setShow(Platform.OS === 'ios'); // to hide back the picker
            //  setMode('date'); // defaulting to date for next open
        }
        //  setDate(currentDate);
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        //  console.log('A date has been picked: ' + day + '-' + month + '-' + year);
        //setDate_Copy(year + '-' + month + '-'  + day);

        var MyDateString =
            currentDate.getFullYear() +
            '-' +
            ('0' + (currentDate.getMonth() + 1)).slice(-2) +
            '-' +
            ('0' + currentDate.getDate()).slice(-2);
        //  console.log('A date has been picked: ' + day + '-' + month + '-' + year);
        setDate_Copy(MyDateString);

        // YYYY-MM-DD
    };


    const onChangeiOS = (event, selectedDate) => {


        const currentDate = selectedDate || date;

        setShow(Platform.OS === 'ios');

        if (event.type == 'set') {
            //ok button
            setDate(currentDate);
            setShow(Platform.OS !== 'ios'); // to show time

        } else {
            setShow(Platform.OS === 'ios'); // to hide back the picker
            setMode('date'); // defaulting to date for next open
        }
        //  setDate(currentDate);
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        //  console.log('A date has been picked: ' + day + '-' + month + '-' + year);
        //setDate_Copy(year + '-' + month + '-'  + day);

        var MyDateString =
            currentDate.getFullYear() +
            '-' +
            ('0' + (currentDate.getMonth() + 1)).slice(-2) +
            '-' +
            ('0' + currentDate.getDate()).slice(-2);
        //  console.log('A date has been picked: ' + day + '-' + month + '-' + year);
        setDate_Copy(MyDateString);

        // YYYY-MM-DD
    };
    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };




    ////// Date Picker

    const onChange2 = (event, selectedDate) => {


        const currentDate = selectedDate || date2;

        setShow2(Platform.OS === 'ios');

        if (event.type == 'set') {
            //ok button
            setDate2(currentDate);
            //  setShow(Platform.OS !== 'ios'); // to show time

        } else {
            return false;
            //   setShow(Platform.OS === 'ios'); // to hide back the picker
            //  setMode('date'); // defaulting to date for next open
        }
        //  setDate(currentDate);
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        //  console.log('A date has been picked: ' + day + '-' + month + '-' + year);
        //setDate_Copy(year + '-' + month + '-'  + day);

        var MyDateString =
            currentDate.getFullYear() +
            '-' +
            ('0' + (currentDate.getMonth() + 1)).slice(-2) +
            '-' +
            ('0' + currentDate.getDate()).slice(-2);
        //  console.log('A date has been picked: ' + day + '-' + month + '-' + year);
        setDate_Copy2(MyDateString);

        // YYYY-MM-DD
    };


    const onChangeiOS2 = (event, selectedDate) => {


        const currentDate = selectedDate || date2;

        setShow2(Platform.OS === 'ios');

        if (event.type == 'set') {
            //ok button
            setDate2(currentDate);
            setShow2(Platform.OS !== 'ios'); // to show time

        } else {
            setShow2(Platform.OS === 'ios'); // to hide back the picker
            setMode2('date'); // defaulting to date for next open
        }
        //  setDate(currentDate);
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        //  console.log('A date has been picked: ' + day + '-' + month + '-' + year);
        //setDate_Copy(year + '-' + month + '-'  + day);

        var MyDateString =
            currentDate.getFullYear() +
            '-' +
            ('0' + (currentDate.getMonth() + 1)).slice(-2) +
            '-' +
            ('0' + currentDate.getDate()).slice(-2);
        //  console.log('A date has been picked: ' + day + '-' + month + '-' + year);
        setDate_Copy2(MyDateString);

        // YYYY-MM-DD
    };
    const showMode2 = currentMode => {
        setShow2(true);
        setMode2(currentMode);
    };

    const showDatepicker2 = () => {
        showMode2('date');
    };


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
        };

        setLoading(true);

        dispatch(
            userActions.Listpregnantwomen({
                data,
                callback: ({ result, error }) => {
                    console.warn('after outlet list result data', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setLoading(false);
                        setData(result.results);
                    } else if (result.status === false) {
                        setLoading(false);
                        setData([]);
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


    const getDataSearch = async () => {
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
            startdate: date_copy,
            enddate: date_copy2
        };

        setLoading(true);

        dispatch(
            userActions.Listpregnantwomensearch({
                data,
                callback: ({ result, error }) => {
                    console.warn('list result data search', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setLoading(false);
                        setData(result.results);
                    } else if (result.status === false) {
                        setLoading(false);
                        setData([]);
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


    const renderItemorderDetails = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'column', marginLeft: '5%', marginRight: '5%', borderRadius: 6, borderColor: '#EDEDED', borderWidth: 2 ,marginTop:'8%'}}>

                <View style={{ flex: 1, padding: 10, flexDirection: 'row', top: 10, marginBottom: 10 }}>
                    <Image
                        source={Images.women}
                        style={{ width: 65, height: 65, marginLeft: 10 }} />
                    <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: '#27272E' }}>{item.name}</Text>
                        <View style={{ backgroundColor: '#0D9F48', borderRadius: 6, top: 5 }}>
                            <Text style={{ fontSize: 7, fontWeight: '600', color: '#FFFFFF', alignSelf: 'center' }}>{'RCH ID : ' + item.rch_id}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', }}>

                            <Image
                                source={Images.call}
                                style={{ top: 10 }} />
                            <Text style={{ fontSize: 10, fontWeight: '400', color: '#27272E', top: 8, marginLeft: 5 }}>{item.phone_number}</Text>

                        </View>

                    </View>
                </View>

                <View style={{
                    flexDirection: 'row', flex: 1,
                }}>

                    <View style={{
                        flex: 1,

                    }}>
                        <SubmitButton
                            style={styles.submitButton}
                            nameStyle={styles.buttonText}
                            buttonName={'View Details'}
                            onPress={gotoNavigate('ViewDetails', item)}
                        />

                    </View>



                    <View style={{
                        flex: 1,

                    }}>
                        <SubmitButton
                            style={styles.submitButton_}
                            nameStyle={styles.buttonText_}
                            // onPress={onPressSubmit}
                            buttonName={'ANC Report'}
                            onPress={gotoNavigate('ANCReport', item)}
                        //  onPress={gotoCallApi}
                        />

                    </View>



                </View>



            </View>
        )
    }

    return (
        <SafeAreaView
            style={{ flex: 1, }}>
            {/* <CustomStatusBar /> */}
            {isLoading && <ProgressIndicator isLoading={isLoading} />}

            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#106799" translucent={true} />

            <Header
                title={'Registered PW'}
                onPress={() => {
                    props.navigation.goBack();
                }}
            />


            <View style={{ flexDirection: 'column', flex: 1, top: 15, backgroundColor: '#FFFFFF', marginBottom: '10%' }}>

                <View style={{
                    flexDirection: 'row',
                }}>
                    {/* <Text style={{ fontSize: 12, fontWeight: '400', top: 20, marginLeft: 10 }}>From</Text> */}

                    <View style={{
                        flex: 1,

                    }}>
                        <TouchableOpacity onPress={showDatepicker}>


                            <TextInputs
                                style={styles.textinput_}
                                editable={false}
                                placeholder={'Start Date'}
                                placeholderTextColor={'#000'}
                                value={date_copy.toString()}
                                icons={Images.calender}

                            />

                        </TouchableOpacity>


                    </View>

                    {/* <Text style={{ fontSize: 12, fontWeight: '400', top: 20 }}>To</Text> */}


                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity onPress={showDatepicker2}>

                            <TextInputs
                                style={styles.textinput_}
                                hasFocus={userIdhasFocus}
                                editable={false}
                                placeholder={'End Date'}
                                placeholderTextColor={'#000'}
                                value={date_copy2.toString()}
                                icons={Images.calender}

                            />

                        </TouchableOpacity>

                    </View>


                    <SubmitButton
                        style={styles.submitButton_search}
                        nameStyle={styles.buttonText_search}
                        buttonName={'Filter'}
                        onPress={gotoSubmit()}
                    />

                    <SubmitButton
                        style={styles.submitButton_search}
                        nameStyle={styles.buttonText_search}
                        buttonName={'Reset'}
                        onPress={gotoReset()}
                    />



                </View>


                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        minDate={new Date()}
                        maximumDate={new Date()}
                        is24Hour={true}
                        format="YYYY-MMM-DD"
                        display="default"
                        onChange={Platform.OS === 'ios' ? onChangeiOS : onChange}

                    />
                )}


                {show2 && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date2}
                        mode={mode2}
                        minimumDate={new Date(date)}
                        maximumDate={new Date()}
                        // maximumDate={new Date()}
                        is24Hour={true}
                        format="YYYY-MMM-DD"
                        display="default"
                        onChange={Platform.OS === 'ios' ? onChangeiOS2 : onChange2}

                    />
                )}


                <FlatList
                    data={getdata}
                    style={{ marginTop: 2, }}
                    renderItem={renderItemorderDetails}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={() => (
                        <View
                            style={{
                                width,
                                height: height / 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={{ fontSize: 18, color: '#11689A' }}>
                                No Data Found
                            </Text>
                        </View>
                    )
                    }
                />


            </View>


        </SafeAreaView>
    );
};

export default RegisteredPW;
