import {Dimensions, StyleSheet} from 'react-native';
//import {AppColors} from 'assets';
//import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const {width} = Dimensions.get('window');

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
 
  submitButton: {
    marginTop: '10%',
    backgroundColor: '#C8250C',
    marginHorizontal: 16,
    //  paddingVertical: 8,
    alignItems: 'center',
   // borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    width: '90%',
  },
  buttonText: { color: '#FFFFFF', fontWeight: '700',fontSize:17 },
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
    marginRight:'5%'
  },
  checkbox: {
    height: 30,
    width: 30,
    marginRight: 5
  }
});
