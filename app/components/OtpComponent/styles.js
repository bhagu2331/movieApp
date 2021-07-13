import { StyleSheet } from 'react-native';
import BaseColor from '../../config/colors';
import { FontFamily } from '../../config/typography';

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 0.5,
    borderRadius: 6,
    marginHorizontal: 5,
    backgroundColor: BaseColor.otpBacK,
    color: '#404553CC',
    fontSize: 20,
    fontFamily: FontFamily.default,
    paddingVertical: 3
  },
  underlineStyleHighLighted: {
    borderColor: '#aaa',
  },
});
export default styles;
