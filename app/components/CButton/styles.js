import { StyleSheet } from "react-native";
import BaseColor from "../../config/colors";
import { FontFamily } from "../../config/typography";

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: BaseColor.whiteColor,
    paddingVertical: 8,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  txtStyle: {
    fontWeight: "bold",
    color: BaseColor.blueLight,
    fontFamily: FontFamily.default,
  },
  rightIcon: {
    color: BaseColor.whiteColor
  }
});

export default styles;
