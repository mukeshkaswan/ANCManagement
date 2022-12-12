import React from 'react';

import {
  SafeAreaView,
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../assets';

const Header = ({onPress, title,disabled}) => {
  return (
    <ImageBackground
     // source={Images.loginframe}
      style={{
        width: '100%',
       // height: 56,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 8,
        top:10,
        justifyContent: 'space-between',
        backgroundColor:'#106799'
      }}>
      <TouchableOpacity disabled={disabled} style={{padding: 16}} onPress={onPress}>
        <Image
          source={Images.back}
          style={{width: 30, height: 25, resizeMode: 'contain'}}
        />
      </TouchableOpacity>

      <View
        style={{
          alignItems: 'center',
          // backgroundColor: 'red',
          flex: 1,
          marginEnd: 48,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Inter-Regular',
            fontWeight: '800',
            fontSize: 18,
          }}>
          {/* Create Order */}
          {title}
        </Text>
      </View>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',

          backgroundColor: '#FFCD33',
          borderColor: '#000',
          height: 40,
          width: 40,
          borderRadius: 100,
          position: 'absolute',
        }}>
        <Image source={Images.logout}></Image>
      </View> */}
    </ImageBackground>
  );
};

export default Header;
