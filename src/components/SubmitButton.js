import React from 'react';
import Button from './Buttonandroid.js';
//import Text from "./Text";
import { SafeAreaView, Text, Image, View } from 'react-native';

const SubmitButton = ({ style, buttonName, nameStyle, onPress, hide }) => {
  return (
    <Button
      style={{
        ...style,
      }}
      onPress={onPress}>

      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        {/* {hide ? <Image
          source={Images.work}
          style={{
            marginRight: 4,
          }}
        /> : null} */}
        <Text style={{ ...nameStyle,  }}>{buttonName}</Text>
      </View>

    </Button>
  );
};

export default SubmitButton;
