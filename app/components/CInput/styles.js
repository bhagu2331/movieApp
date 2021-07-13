import { StyleSheet } from 'react-native';
import BaseColor from '../../config/colors';

const styles = StyleSheet.create({
  countryPickerView: {
    // backgroundColor: 'red'
  },
  inputWrapper: {
    // padding: ,
    backgroundColor: BaseColor.transparentWhite,
    borderRadius: 25,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 24,
    borderWidth: 1,
    borderColor: BaseColor.whiteColor
  },
  input: {
    marginStart: 12,
    flex: 1,
    marginEnd: 24,
    color: BaseColor.whiteColor,
  }
});

export default styles;
