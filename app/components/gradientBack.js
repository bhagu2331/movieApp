import React from "react";
import { Dimensions, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import BaseColor from "../config/colors";

const GradientBack = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[BaseColor.blueLight, BaseColor.blueDark]}
      style={{
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: "100%",
        width: '100%',
        position: 'absolute'
      }}
    ></LinearGradient>
  );
};

export default GradientBack;
