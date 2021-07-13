import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import CButton from "../../../components/CButton";
import CInput from "../../../components/CInput";
import DropDown from "../../../components/DropDown";
import GradientBack from "../../../components/gradientBack";
import BaseColor from "../../../config/colors";
import authActions from "../../../redux/reducers/auth/actions";
import { translate } from '../../../lang/Translate';

const Sample = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.auth.testTxt);
  console.log("🚀 ~ file: index.js ~ line 10 ~ Login ~ value", value);

  const [txt, settxt] = useState(value);
  const [loader, setloader] = useState(false);
  const [done, setdone] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const data = [
    {
      value: "java",
      key: "1",
    },
    {
      value: "asd a",
      key: "2",
    },
    {
      value: "asda",
      key: "3",
    },
    {
      value: "f h",
      key: "4",
    },
    {
      value: "eg5t",
      key: "5",
    },
    {
      value: "tmtb",
      key: "6",
    },
  ];

  return (
    <View>
      <GradientBack />
      <Text>HELLO</Text>
      <CInput
      
        placeholder="Email"
        value={txt}
        onChangeText={(val) => {
          settxt(val);
        }}
        placeholderTextColor={BaseColor.placeHolderColor}
        iconName="envelope"
      />
      <CButton
        title={translate('welcomeToBaby')}
        style={{
          margin: 16,
          borderRadius: 12,
          // backgroundColor: Base
        }}
        onPress={() => {
          setTimeout(() => {
            setloader(true);
          }, 1000);
          setTimeout(() => {
            setloader(false);
            setdone(true);
          }, 3000);
        }}
        loader={loader}
        done={done}
        anim
      />
      <DropDown
      style={{
        margin: 16,
        borderRadius: 12
      }}
        selectedValue={selectedValue}
        data={data}
        labelProp="value"
        valueProp="key"
        onValueChange={( value, index ) => {
          console.log(value);
          setSelectedValue(value);
        }}
        placeholder="Age"
      />
    </View>
  );
};

export default Sample;
