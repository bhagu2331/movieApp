import React, {useState} from 'react';
// import { View, Text } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';

export default function OtpComponent(props) {
  const {
    onCodeFilled,
    noOfBox = 4,
    otpWrapperStyle,
    codeInputFieldStyle,
    codeInputHighlightStyle,
    onCodeChanged,
  } = props;

  const [clearCode, setclearCode] = useState(false);
  const [code, setcode] = useState();

  return (
    <OTPInputView
      style={{
        height: 100,
        fontSize: 20,
        paddingHorizontal: 0,
        ...otpWrapperStyle,
      }}
      code={code}
      pinCount={noOfBox}
      // autoFocusOnLoad
      codeInputFieldStyle={{
        ...styles.underlineStyleBase,
        ...codeInputFieldStyle,
      }}
      codeInputHighlightStyle={{
        ...styles.underlineStyleHighLighted,
        ...codeInputHighlightStyle,
      }}
      clearInputs={clearCode}
      onCodeFilled={(code) => {
        onCodeFilled(code);
        setclearCode(true);
        setTimeout(() => {
          setclearCode(false);
          setcode();
        }, 1000);
      }}
      keyboardAppearance={'dark'}
      keyboardType='number-pad'
      onCodeChanged={(code) => {
        onCodeChanged(code);
        setcode(code);
      }}
    />
  );
}
