import React from 'react';
import { TextInput as RNTextInput, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Images } from 'assets';

const TextInputs = ({
  style,
  value,
  placeholder,
  onChangeText,
  onBlur,
  onFocus,
  hasFocus,
  editable,
  keyboardType,
  eyePress,
  isShow,
  icon,
  secureTextEntry,
  maxLength,
  icons,
  hide
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        // borderBottomWidth: 1,
        marginHorizontal: 8,
        justifyContent: 'space-between',
        color: editable ? 'black' : 'black',
        borderColor: hasFocus ? '#DDDDDD' : '#DDDDDD',
        borderRadius: 8,
        marginTop: 10,
        borderWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
      }}>

     {hide === true ? <Image  source={icon} style={{ marginRight: 10 }} />:null}
      <RNTextInput
        style={{
          // color: editable ? AppColors.black : AppColors.black,
          color: 'red',
          // borderBottomColor: hasFocus
          //   ? AppColors.backgroundColor
          //   : AppColors.grey,
          ...style,

          flex: 1,
        }}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#888888'}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={onChangeText}
        keyboardType={keyboardType ? keyboardType : 'default'}
        editable={!editable ? editable : true}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength ? maxLength : 10000}
      />

      <TouchableOpacity onPress={eyePress}>
        <Image source={icons} style={{}} />
      </TouchableOpacity>
    </View>
  );
};

export default TextInputs;
