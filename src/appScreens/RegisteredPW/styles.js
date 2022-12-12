import { Dimensions, StyleSheet } from 'react-native';
//import {AppColors} from 'assets';
//import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textinput: {
    // fontWeight: '700',
    //  fontFamily: 'Inter-Regular',
    color: '#000',
  },
  textinput_: {
    fontWeight: '300',
    fontSize: 10,
    //  fontFamily: 'Inter-Regular',
    color: '#27272E',
    height: 37,
  },

  submitButton: {
    backgroundColor: '#C8250C',
    //  paddingVertical: 8,
    alignItems: 'center',
    // borderRadius: 10,
    height: 36,
    justifyContent: 'center',
    width: '100%',
  },
  submitButton_search: {
    backgroundColor: '#11689A',
    //  paddingVertical: 8,
    alignItems: 'center',
    // borderRadius: 10,
    height: 36,
    justifyContent: 'center',
    width: '14%',
    top: 10,
    marginRight: 5,
    borderRadius: 4,
    marginLeft: 10
  },
  buttonText: { color: '#FFFFFF', fontWeight: '600', fontSize: 12 },
  buttonText_search: { color: '#FFFFFF', fontWeight: '600', fontSize: 10 },

  submitButton_: {
    backgroundColor: '#11689A',
    //  paddingVertical: 8,
    alignItems: 'center',
    // borderRadius: 10,
    height: 36,
    justifyContent: 'center',
    width: '100%',
  },
  buttonText_: { color: '#FFFFFF', fontWeight: '600', fontSize: 12 },
  text: {
    color: '#C8250C',
    fontSize: 12,
    textDecorationLine: 'underline'
  },
  text_: {
    color: '#27272E',
    fontSize: 12,
  },
  checkboxpasswordcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8%',
    alignItems: 'center',
    marginRight: '5%'
  },
  checkbox: {
    height: 30,
    width: 30,
    marginRight: 5
  }
});
