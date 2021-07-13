/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";
import BaseColor from "../../config/colors";
import FAIcon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import { CustomIcon } from "../../config/LoadIcons";

const CInput = React.forwardRef((props, ref) => {
  const {
    onSubmitEditing = () => {},
    placeholder = "Default placeholder",
    onChangeText = () => {},
    isLastInput,
    returnKeyType,
    textInputWrapper,
    secureTextEntry,
    icon,
    rightIcon,
    rightIconStyle,
    editable = true,
    value,
    colorStyle,
    keyboardType,
    placeholderTextColor = BaseColor.placeHolderColor,
    disabled = false,
    error,
    maxLength,
    showCountryPicker = false,
    onCountrySelect,
    countryCode,
    containterStyle,
    inputStyle,
    textInputStyle,
    iconStyle,
    viewStyle,
    txtColor = BaseColor.blackColor,
    countryLabelColor = BaseColor.blackColor,
    multiline = false,
    disableTxtColor = "rgba(0, 0, 0, 0.4)",
    iconColor,
    iconSize,
    iconName,
    keyboardAppearance,
    ...rest
  } = props;

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#0000", "#ffffff20"]}
      style={[styles.inputWrapper, textInputWrapper]}
      // style={{
      //   paddingLeft: 15,
      //   paddingRight: 15,
      //   borderRadius: 5,
      //   height: 500,
      //   position: "absolute",
      //   height: Dimensions.get("window").height,
      //   width: Dimensions.get("window").width,
      // }}
    >
      {/* <View style={[viewStyle || styles.inputWrapper, textInputWrapper]}> */}
      <CustomIcon
        name={iconName || "rocket"}
        size={18}
        color={iconColor || "#fff"}
      />
      <TextInput
        {...rest}
        ref={ref}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[
          styles.input,
          inputStyle,
          editable ? styles.colorInput : colorStyle,
        ]}
        onChangeText={onChangeText}
        blurOnSubmit={false}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType || (isLastInput ? "go" : "next")}
        secureTextEntry={secureTextEntry}
        editable={editable}
        value={value}
        maxLength={maxLength}
        keyboardType={keyboardType}
        multiline={multiline}
      />
      {/* {rightIcon && <View style={[iconStyle || styles.rightIcon, rightIconStyle]}>{icon}</View>} */}
      {/* </View> */}
    </LinearGradient>
  );
});

export default CInput;
