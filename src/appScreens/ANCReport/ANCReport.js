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
    FlatList
} from 'react-native';
import { TextInput, SubmitButton, Header, ProgressIndicator, Validate } from '../../components';
import styles from './styles';
import { Images } from '../../assets';
import { CheckBox } from 'react-native-elements';
import * as userActions from '../../actions/user-actions-types';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
const RegisteredPW = props => {
    const { id, name } = props.route.params.item;
    const [allSelected, setSelected] = useState(false);
    const [email, setEmail] = useState('');
    const [userIdhasFocus, setuserIdhasFocus] = useState(false);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [getdata, setData] = useState([]);

    // const gotoNavigate = (route, item) => () => {
    //     props.navigation.navigate(route, { item });
    // };

    // useFocusEffect(
    //     React.useCallback(() => {
    //     }, []),
    // );



    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };
    //handling onPress action  
    const getListViewItem = (item) => {
        Alert.alert(item.key);
    }



    return (
        <SafeAreaView
            style={{ flex: 1, }}>
            {/* <CustomStatusBar /> */}
            {isLoading && <ProgressIndicator isLoading={isLoading} />}

            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#106799" translucent={true} />

            <Header
                title={name + ' ' + 'Details'}
                onPress={() => {
                    props.navigation.goBack();
                }}
            />

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ flexDirection: 'column', flex: 1 }}>

                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        <View style={{ width: '40%' }} >

                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={[
                                    { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
                                    { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
                                    { key: 'Python' }, { key: 'Ajax' }, { key: 'C++' },
                                    { key: 'Ruby' }, { key: 'Rails' }, { key: '.Net' },
                                    { key: 'Perl' }, { key: 'Sap' }, { key: 'Python' },
                                    { key: 'Ajax' }, { key: 'C++' }, { key: 'Ruby' },
                                    { key: 'Rails' }, { key: '.Net' }, { key: 'Perl' }
                                ]}
                                style={{}}
                                renderItem={({ item }) =>

                                    <View style={{ padding: 10 }}>
                                        <Text style={styles.item}
                                        >{item.key}</Text>
                                    </View>

                                }
                                ItemSeparatorComponent={renderSeparator}
                            />

                        </View>

                        <View style={{ width: '60%', }} >

                            <FlatList
                                horizontal
                                //  showsHorizontalScrollIndicator={false}
                                data={[
                                    { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
                                    { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
                                    { key: 'Python' }, { key: 'Ajax' }, { key: 'C++' },
                                    { key: 'Ruby' }, { key: 'Rails' }, { key: '.Net' },
                                    { key: 'Perl' }, { key: 'Sap' }, { key: 'Python' },
                                    { key: 'Ajax' }, { key: 'C++' }, { key: 'Ruby' },
                                    { key: 'Rails' }, { key: '.Net' }, { key: 'Perl' }
                                ]}

                                style={{}}
                                contentContainerStyle={{
                                    //   flexDirection: 'column'

                                }}
                                renderItem={({ item }) =>
                                    <View style={{ padding: 10, }}>
                                        <Text style={styles.item}
                                        >{item.key}</Text>
                                    </View>
                                }
                            //  ItemSeparatorComponent={renderSeparator}
                            />

                        </View>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RegisteredPW;
