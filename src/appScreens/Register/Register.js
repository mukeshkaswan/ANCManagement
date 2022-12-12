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
import { TextInput, SubmitButton, Header, ProgressIndicator, Validate } from '../../components';
import styles from './styles';
import { Images } from '../../assets';
import { CheckBox } from 'react-native-elements';
import * as userActions from '../../actions/user-actions-types';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { Dropdown } from 'react-native-material-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';


const Register = props => {
    
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [userIdhasFocus, setuserIdhasFocus] = useState(false);
    const [email, setEmail] = useState('');

    const [date, setDate] = useState(new Date());
    const [date_copy, setDate_Copy] = useState('');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const [date2, setDate2] = useState(new Date());
    const [date_copy2, setDate_Copy2] = useState('');
    const [mode2, setMode2] = useState('date');
    const [show2, setShow2] = useState(false);

    const [name_, setName] = useState('');
    const [userIdhasFocusname, setuserIdhasFocusname] = useState(false);


    const [weight_, setWeight] = useState('');
    const [userIdhasFocusnameweight, setuserIdhasFocusnameweight] = useState(false);


    const [guardian_, setGuardian] = useState('');
    const [userIdhasFocusnameguardian, setuserIdhasFocusnameguardian] = useState(false);

    const [contactofbeneficiary, setContactofBeneficiary] = useState('');
    const [userIdhasFocusnamecontactofbeneficiary, setuserIdhasFocusnameContactofBeneficiary] = useState(false);



    const [rchid, setRCHID] = useState('');
    const [userIdhasFocusnamerchid, setuserIdhasFocusnameRchID] = useState(false);

    const [awcno, setAWCNo] = useState('');
    const [userIdhasFocusnamerawcno, setuserIdhasFocusnameAWCNo] = useState(false);


    const [pregno, setNoOfPreg] = useState('');
    const [userIdhasFocusnamepregno, setuserIdhasFocusnamePregNo] = useState(false);


    const [lastdeli, setLastDeli] = useState('');
    const [userIdhasFocusnamelastdeli, setuserIdhasFocusnameLastDeli] = useState(false);


    const [blockdrop, setBlockDrop] = useState('Select');
    const [selectedStateDrop, setSelectedStateDrop] = useState([]);

    const [villagedrop, setVillageDrop] = useState('Select');
    const [selectedStateVillageDrop, setSelectedStateVillageDrop] = useState([]);


    const [warddrop, setWard] = useState('Select');
    const [selectedStateWardDrop, setSelectedStateWardDrop] = useState([]);


    const [nameofasha, setNameOfAsha] = useState('Select');
    const [selectedStatenameofashadrop, setSelectedStateNameOfAshaDrop] = useState([]);


    const [contactnoasha, setContactNoAsha] = useState('Select');
    const [selectedStatenamecontachnoasha, setSelectedStateNameContactNoAsha] = useState([]);

    const [nameofanm, setNameOfAnm] = useState('Select');
    const [selectedStatenameofanmdrop, setSelectedStateNameOfanmDrop] = useState([]);


    const [contactnoanm, setContactNoAnm] = useState('Select');
    const [selectedStatenamecontachnoanm, setSelectedStateNameContactNoAnm] = useState([]);


    const [hwcname, setHWCName] = useState('Select');
    const [selectedStatenamehwc, setSelectedStateNameHWC] = useState([]);


    useFocusEffect(
        React.useCallback(() => {
            getBlockData();
            getVillageData();
            getWardData();
            getNameOfAshaData();
            getNameOfAnmData();
            getHWCNameData();




        }, []),
    );





    const getdataKeyBlock = async result => {

        if (result.length > 0) {
            var state = [];
            result.map((element: any) => {
                let obj = {
                    label: element.name,
                    value: element.id,
                };
                // var personDesig=element.persiondesignation;
                // setPerDesig(personDesig)
               // setBlockDrop(result[0].id);

                state.push(obj);
            });
            setSelectedStateDrop(state);
        }

        else {
            setBlockDrop('No record found')
            setSelectedStateDrop([]);
        }

    };





    const getdataKeyVillage = async result => {

        if (result.length > 0) {
            var state = [];
            result.map((element: any) => {
                let obj = {
                    label: element.name,
                    value: element.id,
                };
                // var personDesig=element.persiondesignation;
                // setPerDesig(personDesig)
               // setVillageDrop(result[0].id);

                state.push(obj);
            });
            setSelectedStateVillageDrop(state);
        }

        else {
            setVillageDrop('No record found')
            setSelectedStateVillageDrop([]);
        }

    };



    const getdataKeyWard = async result => {

        if (result.length > 0) {
            var state = [];
            result.map((element: any) => {
                let obj = {
                    label: element.name,
                    value: element.id,
                };
                // var personDesig=element.persiondesignation;
                // setPerDesig(personDesig)
               // setWard(result[0].id);

                state.push(obj);
            });
            setSelectedStateWardDrop(state);
        }

        else {
            setWard('No record found')
            setSelectedStateWardDrop([]);
        }

    };



    const getdataKeynameofasha = async result => {

        if (result.length > 0) {
            var state = [];
            result.map((element: any) => {
                let obj = {
                    label: element.name,
                    value: element.id,
                };
                // var personDesig=element.persiondesignation;
                // setPerDesig(personDesig)
               // setNameOfAsha(result[0].id);

                state.push(obj);
            });
            setSelectedStateNameOfAshaDrop(state);
        }

        else {
            setNameOfAsha('No record found')
            setSelectedStateNameOfAshaDrop([]);
        }

    };



    const getdataKeynameofashacontact = async result => {

        var state = [];
        let obj = {
            label: result.phone_number,
            value: result.id,
        };
        // var personDesig=element.persiondesignation;
        // setPerDesig(personDesig)
       // setContactNoAsha(result.id);

        state.push(obj);
        setSelectedStateNameContactNoAsha(state);

        // else {
        //     setContactNoAsha('No record found')
        //     setSelectedStateNameContactNoAsha([]);
        // }

    };


    const getdataKeynameofanmcontact = async result => {

        var state = [];
        let obj = {
            label: result.phone_number,
            value: result.id,
        };
        // var personDesig=element.persiondesignation;
        // setPerDesig(personDesig)
      //  setContactNoAnm(result.id);

        state.push(obj);
        setSelectedStateNameContactNoAnm(state);

        // else {
        //     setContactNoAsha('No record found')
        //     setSelectedStateNameContactNoAsha([]);
        // }

    };

    const getdataKeynameofanm = async result => {

        if (result.length > 0) {
            var state = [];
            result.map((element: any) => {
                let obj = {
                    label: element.name,
                    value: element.id,
                };
                // var personDesig=element.persiondesignation;
                // setPerDesig(personDesig)
               // setNameOfAnm(result[0].id);

                state.push(obj);
            });
            setSelectedStateNameOfanmDrop(state);
        }

        else {
            setNameOfAnm('No record found')
            setSelectedStateNameOfanmDrop([]);
        }

    };


    const getdataKeyhwcname = async result => {

        if (result.HSC.length > 0) {

            var state = [];
            result.HSC.map((element: any) => {
                let obj = {
                    label: element.name,
                    value: element.id,
                };
              //  setHWCName(result.HSC[0].id);

                state.push(obj);
            });
            setSelectedStateNameHWC(state);

        }
        else if (result.HSC.length < 0 && result.APHC.length > 0) {

            var state = [];
            result.APHC.map((element: any) => {
                let obj = {
                    label: element.name,
                    value: element.id,
                };
              //  setHWCName(result.APHC[0].id);

                state.push(obj);
            });
            setSelectedStateNameHWC(state);

        }

        else if (result.HSC.length < 0 && result.APHC.length < 0) {

            var state = [];
            result.PHC.map((element: any) => {
                let obj = {
                    label: element.name,
                    value: element.id,
                };
               // setHWCName(result.PHC[0].id);

                state.push(obj);
            });
            setSelectedStateNameHWC(state);

        }


        // if (result.length > 0) {
        //     var state = [];
        //     result.map((element: any) => {
        //         let obj = {
        //             label: element.name,
        //             value: element.id,
        //         };
        //         // var personDesig=element.persiondesignation;
        //         // setPerDesig(personDesig)
        //         setHWCName(result[0].id);

        //         state.push(obj);
        //     });
        //     setSelectedStateNameHWC(state);
        // }

        // else {
        //     setHWCName('No record found')
        //     setSelectedStateNameHWC([]);
        // }

    };


    const getBlockData = async () => {
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
            userActions.GetBlock({
                data,
                callback: ({ result, error }) => {
                    console.warn('after Data', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setLoading(false);
                        getdataKeyBlock(result.data);

                    } else if (result.status === false) {
                        setLoading(false);
                        setSelectedStateDrop([]);
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



    const getVillageData = async () => {
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
            userActions.GetVillage({
                data,
                callback: ({ result, error }) => {
                    console.warn('after Data Village', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setLoading(false);
                        getdataKeyVillage(result.data);

                    } else if (result.status === false) {
                        setLoading(false);
                        setSelectedStateVillageDrop([]);
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



    const getWardData = async () => {
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
            userActions.GetWard({
                data,
                callback: ({ result, error }) => {
                    console.warn('after Data Ward', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setLoading(false);
                        getdataKeyWard(result.data);

                    } else if (result.status === false) {
                        setLoading(false);
                        setSelectedStateWardDrop([]);
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



    const getNameOfAshaData = async () => {
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
            userActions.GetNameOfAsha({
                data,
                callback: ({ result, error }) => {
                    console.warn('after data name of asha', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setLoading(false);
                        getdataKeynameofasha(result.data);

                    } else if (result.status === false) {
                        setLoading(false);
                        setSelectedStateNameOfAshaDrop([]);
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



    const getNameOfAnmData = async () => {
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
            userActions.GetNameOfAnm({
                data,
                callback: ({ result, error }) => {
                    console.warn('after data name of anm', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setLoading(false);
                        getdataKeynameofanm(result.data);

                    } else if (result.status === false) {
                        setLoading(false);
                        setSelectedStateNameOfanmDrop([]);
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



    const getContactNoAshaData = async (id) => {
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
            userActions.GetContactNoAsha({
                data,
                callback: ({ result, error }) => {
                    console.warn('after contact no of asha', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setLoading(false);
                        getdataKeynameofashacontact(result.data);

                    } else if (result.status === false) {
                        setLoading(false);
                        setSelectedStateNameContactNoAsha([]);
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


    const getContactNoAnmData = async (id) => {
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
            userActions.GetContactNoAnm({
                data,
                callback: ({ result, error }) => {
                    console.warn('after contact no of anm', result);
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setLoading(false);
                        getdataKeynameofanmcontact(result.data);

                    } else if (result.status === false) {
                        setLoading(false);
                        setSelectedStateNameContactNoAnm([]);
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



    const getHWCNameData = async () => {
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
            userActions.GetHWCName({
                data,
                callback: ({ result, error }) => {
                    console.warn('after data name of hwc name', JSON.stringify(result));
                    if (error) {
                        setLoading(false);
                        Toast.show('Please try again...', Toast.SHORT);
                        return;
                    }

                    if (result.status) {
                        setLoading(false);
                        getdataKeyhwcname(result.data);

                    } else if (result.status === false) {
                        setLoading(false);
                        setSelectedStateNameHWC([]);
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





    const onPressSubmit = async () => {

        const namerror = Validate('name', name_);
        const weightError = Validate('weight', weight_);
        const guardianError = Validate('guardian', guardian_);
        const contactofbeneficiaryError = Validate('contactofbeneficiary', contactofbeneficiary);
        const rchidError = Validate('rchid', rchid);
      //  const blockError = Validate('blockerror', blockdrop);

       
       // const blockdropError = Validate('blockdrop', blockdrop);
       // const villagedropError = Validate('villagedrop', villagedrop);
      //  const warddropError = Validate('warddrop', warddrop);
        const awcnoError = Validate('awcno', awcno);

       
       // const nameofashaError = Validate('nameofasha', nameofasha);
      //  const nameofanmError = Validate('nameofanm', nameofanm);
     //   const hwcnameError = Validate('hwcname', hwcname);
        const date_copyError = Validate('date_copy', date_copy);
        const date_copyError2 = Validate('date_copy2', date_copy2);
        const pregnoError = Validate('pregno', pregno);
        const lastdeliError = Validate('lastdeli', lastdeli);


      
        if (namerror || weightError || guardianError || contactofbeneficiaryError || rchidError    || awcnoError   || date_copyError || date_copyError2 || pregnoError || lastdeliError) {
            Toast.show(namerror || weightError || guardianError || contactofbeneficiaryError || rchidError    || awcnoError  || date_copyError || date_copyError2 || pregnoError || lastdeliError, Toast.SHORT);
            return false;
        }
        if(blockdrop == 'Select'){
            Toast.show('Please select block',Toast.SHORT);
           // return;
        }

        if(villagedrop == 'Select'){
            Toast.show('Please select village',Toast.SHORT);
            return;
        }

        if(warddrop == 'Select'){
            Toast.show('Please select ward',Toast.SHORT);
            return;
        }
        if(nameofasha == 'Select'){
            Toast.show('Please select asha name',Toast.SHORT);
            return;
        }

        if(contactnoasha == 'Select'){
            Toast.show('Please select contact no of asha',Toast.SHORT);
            return;
        }

        if(nameofanm == 'Select'){
            Toast.show('Please select anm name',Toast.SHORT);
            return;
        }

        if(contactnoanm == 'Select'){
            Toast.show('Please select contact no of anm',Toast.SHORT);
            return;
        }

        if(hwcname == 'Select'){
            Toast.show('Please select HWC/APCHC/HSC name',Toast.SHORT);
            return;
        }
       

        else {

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
                name: name_,
                guardian: guardian_,
                phone_number: contactofbeneficiary,
                rch_id: rchid,
                awc_number: awcno,
                LMP: date_copy,
                EDD: date_copy2,
                pregnancy_number: pregno,
                last_delivery: lastdeli,
                //created_by: data.created_by,
                hospital: nameofanm,
                block: blockdrop,
                village: villagedrop,
                ward: warddrop,
                weight: weight_,
                asha_user: nameofasha,
                anm_user: nameofanm,

            };

            setLoading(true);

            dispatch(
                userActions.Register({
                    data,
                    callback: ({ result, error }) => {
                        if (error) {
                            setLoading(false);
                            Toast.show('Please try again...', Toast.SHORT);
                            return
                        }
                        if (result.status) {
                            setLoading(false);
                            console.warn('after register data >>>>', result);
                            // getData(result);
                            Toast.show(result.message, Toast.SHORT);
                           // props.navigation.navigate('HomeScreen');

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

    const gotoChangeDropDownValue = (value, index, data) => {
        setNameOfAsha(value);

        getContactNoAshaData(value);

    }


    const gotoChangeDropDownValueAnm = (value, index, data) => {
        setNameOfAnm(value);

        getContactNoAnmData(value);

    }




    return (
        <SafeAreaView
            style={{ flex: 1, }}>
            {/* <CustomStatusBar /> */}
            {isLoading && <ProgressIndicator isLoading={isLoading} />}

            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#106799" translucent={true} />

            <Header
                title={'Registration'}
                onPress={() => {
                    props.navigation.goBack();
                }}
            />


            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>




                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '6%', marginLeft: '5%' }}>Name of Beneficiary*</Text>


                <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocusname}
                    value={name_}
                    placeholder={'Enter name'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocusname(false)}
                    onFocus={() => setuserIdhasFocusname(true)}
                    onChangeText={setName}
                //  icon={Images.email}

                />

                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Weight*</Text>


                <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocusnameweight}
                    value={weight_}
                    placeholder={'Enter weight'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocusnameweight(false)}
                    onFocus={() => setuserIdhasFocusnameweight(true)}
                    onChangeText={setWeight}
                    maxLength={10}
                    keyboardType="numeric"
                />


                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Husband/Father Name*</Text>


                <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocusnameguardian}
                    value={guardian_}
                    placeholder={'Enter name'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocusnameguardian(false)}
                    onFocus={() => setuserIdhasFocusnameguardian(true)}
                    onChangeText={setGuardian}
                />

                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Contact No. of Beneficiary*</Text>


                <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocusnamecontactofbeneficiary}
                    value={contactofbeneficiary}
                    placeholder={'Enter number'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocusnameContactofBeneficiary(false)}
                    onFocus={() => setuserIdhasFocusnameContactofBeneficiary(true)}
                    onChangeText={setContactofBeneficiary}
                    maxLength={10}
                    keyboardType="numeric"
                />

                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>RCH ID*</Text>


                <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocusnamerchid}
                    value={rchid}
                    placeholder={'Enter RCH ID'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocusnameRchID(false)}
                    onFocus={() => setuserIdhasFocusnameRchID(true)}
                    onChangeText={setRCHID}
                    maxLength={15}
                />

                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Name of Block*</Text>



                <Dropdown
                    fontSize={16}
                    baseColor={'#000'}
                    color={'#27272E'}
                    value={blockdrop}
                    dropdownPosition={-3}
                    data={selectedStateDrop}
                    itemTextStyle={{ color: 'red' }}
                    containerStyle={{
                        borderColor: '#DDDDDD',
                        borderWidth: 1,
                        marginTop: 16,
                        borderRadius: 6,
                        backgroundColor: '#FFFFFF',
                        marginLeft: '5%', marginRight: '5%'
                    }}
                    inputContainerStyle={{
                        borderBottomColor: 'transparent',
                        marginHorizontal: 16,
                        marginTop: -22,
                    }}
                    textColor={'#000'}
                    selectedItemColor={'#000'}
                    itemColor={'#000'}
                    onChangeText={value => {
                        setBlockDrop(value);
                    }}
                />
                {/* <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocusnameofblock}
                    value={nameofblock}
                    placeholder={'Enter name'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocusnameofblock(false)}
                    onFocus={() => setuserIdhasFocusnameofblock(true)}
                    onChangeText={setNameofBlock}
                /> */}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Name of Village*</Text>
                    <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginRight: '20%' }}>Name of Ward*</Text>

                </View>



                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', flex: 1,
                }}>

                    <View style={{
                        flex: 1,

                    }}>

                        <Dropdown
                            fontSize={16}
                            baseColor={'#000'}
                            color={'#27272E'}
                            value={villagedrop}
                            dropdownPosition={-3}
                            data={selectedStateVillageDrop}
                            itemTextStyle={{ color: 'red' }}
                            containerStyle={{
                                borderColor: '#DDDDDD',
                                borderWidth: 1,
                                marginTop: 16,
                                borderRadius: 6,
                                backgroundColor: '#FFFFFF',
                                marginLeft: '5%', marginRight: '5%'
                            }}
                            inputContainerStyle={{
                                borderBottomColor: 'transparent',
                                marginHorizontal: 16,
                                marginTop: -22,
                            }}
                            textColor={'#000'}
                            selectedItemColor={'#000'}
                            itemColor={'#000'}
                            onChangeText={value => {
                                setVillageDrop(value);
                            }}
                        />

                        {/* <TextInput
                            style={styles.textinput_}
                            hasFocus={userIdhasFocus}
                            value={email}
                            placeholder={'Enter name'}
                            placeholderTextColor={'#000'}
                            onBlur={() => setuserIdhasFocus(false)}
                            onFocus={() => setuserIdhasFocus(true)}
                            onChangeText={setEmail}
                        /> */}

                    </View>



                    <View style={{
                        flex: 1,

                    }}>

                        {/* <TextInput
                            style={styles.textinput_}
                            hasFocus={userIdhasFocus}
                            value={email}
                            placeholder={'Enter name'}
                            placeholderTextColor={'#000'}
                            onBlur={() => setuserIdhasFocus(false)}
                            onFocus={() => setuserIdhasFocus(true)}
                            onChangeText={setEmail}
                        /> */}

                        <Dropdown
                            fontSize={16}
                            baseColor={'#000'}
                            color={'#27272E'}
                            value={warddrop}
                            dropdownPosition={-3}
                            data={selectedStateWardDrop}
                            itemTextStyle={{ color: 'red' }}
                            containerStyle={{
                                borderColor: '#DDDDDD',
                                borderWidth: 1,
                                marginTop: 16,
                                borderRadius: 6,
                                backgroundColor: '#FFFFFF',
                                marginLeft: '5%', marginRight: '5%'
                            }}
                            inputContainerStyle={{
                                borderBottomColor: 'transparent',
                                marginHorizontal: 16,
                                marginTop: -22,
                            }}
                            textColor={'#000'}
                            selectedItemColor={'#000'}
                            itemColor={'#000'}
                            onChangeText={value => {
                                setWard(value);
                            }}
                        />

                    </View>



                </View>
                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>AWC No*</Text>


                <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocus}
                    value={awcno}
                    placeholder={'Enter number'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocusnameAWCNo(false)}
                    onFocus={() => setuserIdhasFocusnameAWCNo(true)}
                    onChangeText={setAWCNo}
                />


                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Name of ASHA*</Text>


                {/* <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocus}
                    value={email}
                    placeholder={'Enter name'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocus(false)}
                    onFocus={() => setuserIdhasFocus(true)}
                    onChangeText={setEmail}
                /> */}

                <Dropdown
                    fontSize={16}
                    baseColor={'#000'}
                    color={'#27272E'}
                    value={nameofasha}
                    dropdownPosition={-3}
                    data={selectedStatenameofashadrop}
                    itemTextStyle={{ color: 'red' }}
                    containerStyle={{
                        borderColor: '#DDDDDD',
                        borderWidth: 1,
                        marginTop: 16,
                        borderRadius: 6,
                        backgroundColor: '#FFFFFF',
                        marginLeft: '5%', marginRight: '5%'
                    }}
                    inputContainerStyle={{
                        borderBottomColor: 'transparent',
                        marginHorizontal: 16,
                        marginTop: -22,
                    }}
                    textColor={'#000'}
                    selectedItemColor={'#000'}
                    itemColor={'#000'}
                    onChangeText={(value, index, data) =>
                        gotoChangeDropDownValue(value, index, data)
                    }

                />



                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Contact No. of ASHA*</Text>


                {/* <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocus}
                    value={email}
                    placeholder={'Enter number'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocus(false)}
                    onFocus={() => setuserIdhasFocus(true)}
                    onChangeText={setEmail}
                /> */}


                <Dropdown
                    fontSize={16}
                    baseColor={'#000'}
                    color={'#27272E'}
                    value={contactnoasha}
                    dropdownPosition={-3}
                    data={selectedStatenamecontachnoasha}
                    itemTextStyle={{ color: 'red' }}
                    containerStyle={{
                        borderColor: '#DDDDDD',
                        borderWidth: 1,
                        marginTop: 16,
                        borderRadius: 6,
                        backgroundColor: '#FFFFFF',
                        marginLeft: '5%', marginRight: '5%'
                    }}
                    inputContainerStyle={{
                        borderBottomColor: 'transparent',
                        marginHorizontal: 16,
                        marginTop: -22,
                    }}
                    textColor={'#000'}
                    selectedItemColor={'#000'}
                    itemColor={'#000'}
                    onChangeText={value => {
                        setContactNoAsha(value);
                    }}
                />


                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Name of ANM*</Text>


                {/* <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocus}
                    value={email}
                    placeholder={'Enter name'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocus(false)}
                    onFocus={() => setuserIdhasFocus(true)}
                    onChangeText={setEmail}
                /> */}

                <Dropdown
                    fontSize={16}
                    baseColor={'#000'}
                    color={'#27272E'}
                    value={nameofanm}
                    dropdownPosition={-3}
                    data={selectedStatenameofanmdrop}
                    itemTextStyle={{ color: 'red' }}
                    containerStyle={{
                        borderColor: '#DDDDDD',
                        borderWidth: 1,
                        marginTop: 16,
                        borderRadius: 6,
                        backgroundColor: '#FFFFFF',
                        marginLeft: '5%', marginRight: '5%'
                    }}
                    inputContainerStyle={{
                        borderBottomColor: 'transparent',
                        marginHorizontal: 16,
                        marginTop: -22,
                    }}
                    textColor={'#000'}
                    selectedItemColor={'#000'}
                    itemColor={'#000'}
                    onChangeText={(value, index, data) =>
                        gotoChangeDropDownValueAnm(value, index, data)
                    }

                />



                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Contact No. of ANM*</Text>


                {/* <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocus}
                    value={email}
                    placeholder={'Enter number'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocus(false)}
                    onFocus={() => setuserIdhasFocus(true)}
                    onChangeText={setEmail}
                /> */}


                <Dropdown
                    fontSize={16}
                    baseColor={'#000'}
                    color={'#27272E'}
                    value={contactnoanm}
                    dropdownPosition={-3}
                    data={selectedStatenamecontachnoanm}
                    itemTextStyle={{ color: 'red' }}
                    containerStyle={{
                        borderColor: '#DDDDDD',
                        borderWidth: 1,
                        marginTop: 16,
                        borderRadius: 6,
                        backgroundColor: '#FFFFFF',
                        marginLeft: '5%', marginRight: '5%'
                    }}
                    inputContainerStyle={{
                        borderBottomColor: 'transparent',
                        marginHorizontal: 16,
                        marginTop: -22,
                    }}
                    textColor={'#000'}
                    selectedItemColor={'#000'}
                    itemColor={'#000'}
                    onChangeText={value => {
                        setContactNoAnm(value);
                    }}
                />


                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>HWC/APHC/HSC Name*</Text>


                {/* <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocus}
                    value={email}
                    placeholder={'Enter name'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocus(false)}
                    onFocus={() => setuserIdhasFocus(true)}
                    onChangeText={setEmail}
                /> */}

                <Dropdown
                    fontSize={16}
                    baseColor={'#000'}
                    color={'#27272E'}
                    value={hwcname}
                    dropdownPosition={-3}
                    data={selectedStatenamehwc}
                    itemTextStyle={{ color: 'red' }}
                    containerStyle={{
                        borderColor: '#DDDDDD',
                        borderWidth: 1,
                        marginTop: 16,
                        borderRadius: 6,
                        backgroundColor: '#FFFFFF',
                        marginLeft: '5%', marginRight: '5%'
                    }}
                    inputContainerStyle={{
                        borderBottomColor: 'transparent',
                        marginHorizontal: 16,
                        marginTop: -22,
                    }}
                    textColor={'#000'}
                    selectedItemColor={'#000'}
                    itemColor={'#000'}
                    onChangeText={value => {
                        setHWCName(value);
                    }}
                />



                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Date of Last Menstrual Period(LMP)*</Text>

                <TouchableOpacity onPress={showDatepicker}>

                    <TextInput
                        style={styles.textinput}
                        //    value={email}
                        placeholder={'Enter date'}
                        placeholderTextColor={'#000'}
                        // onBlur={() => setuserIdhasFocus(false)}
                        // onFocus={() => setuserIdhasFocus(true)}
                        // onChangeText={setEmail}
                        editable={false}
                        value={date_copy.toString()}
                    />
                </TouchableOpacity>


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
                        maximumDate={new Date(2025, 11, 31)}
                       // maximumDate={new Date()}
                        is24Hour={true}
                        format="YYYY-MMM-DD"
                        display="default"
                        onChange={Platform.OS === 'ios' ? onChangeiOS2 : onChange2}

                    />
                )}


                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Expected Date of Delivery(EDD)*</Text>

                <TouchableOpacity onPress={showDatepicker2}>

                    <TextInput
                        style={styles.textinput}
                        placeholder={'Enter date'}
                        placeholderTextColor={'#000'}
                        editable={false}
                        value={date_copy2.toString()}

                    />
                </TouchableOpacity>


                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>No.of Pregnancies*</Text>


                <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocus}
                    value={pregno}
                    placeholder={'Enter'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocusnamePregNo(false)}
                    onFocus={() => setuserIdhasFocusnamePregNo(true)}
                    onChangeText={setNoOfPreg}
                />


                <Text style={{ color: '#27272E', fontSize: 14, fontStyle: 'normal', fontWeight: '400', marginTop: '5%', marginLeft: '5%' }}>Last Delivery conducted at*</Text>


                <TextInput
                    style={styles.textinput}
                    hasFocus={userIdhasFocus}
                    value={lastdeli}
                    placeholder={'Enter'}
                    placeholderTextColor={'#000'}
                    onBlur={() => setuserIdhasFocusnameLastDeli(false)}
                    onFocus={() => setuserIdhasFocusnameLastDeli(true)}
                    onChangeText={setLastDeli}
                />




            </ScrollView>

            <View style={{ alignItems: 'center' }}>
                <SubmitButton
                    style={styles.submitButton}
                    nameStyle={styles.buttonText}
                    buttonName={'Submit'}
                    onPress={onPressSubmit}
                />
            </View>
        </SafeAreaView>
    );
};

export default Register;
