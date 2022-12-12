import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    color: 'black',
    fontWeight: '300',
    fontSize: 32,
  },
  image: {width: width, height: width, resizeMode: 'contain'},
});
