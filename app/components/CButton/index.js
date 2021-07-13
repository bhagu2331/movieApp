import React, { useRef } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import BaseColor from "../../config/colors";
import styles from "./styles";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { CustomIcon } from "../../config/LoadIcons";

const CButton = (props) => {
  const {
    loader,
    title = "Title",
    onPress = () => {},
    style,
    titleStyle,
    smallBtn,
    done,
    anim,
    iconname,
    iconsize = 24,
    iconColor = BaseColor.blueLight,
  } = props;

  const animation = useSharedValue({ width: "100%", borderRadius: 25 });

  const animationStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(animation.value.width, {
        duration: 1000,
      }),

      borderRadius: withTiming(animation.value.borderRadius, {
        duration: 1000,
      }),
    };
  });

  return (
    <>
      {anim ? (
        <Animated.View style={[styles.btnStyle, animationStyle, style]}>
          {iconname ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onPress}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomIcon name={iconname} size={iconsize} color={iconColor} />
            </TouchableOpacity>
          ) : loader ? (
            <View>
              <ActivityIndicator size={22} color={BaseColor.blueLight} />
            </View>
          ) : done ? (
            <View>
              <CustomIcon
                name={"check"}
                size={18}
                color={BaseColor.blueLight}
              />
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                if (anim) {
                  animation.value = { width: "16%", borderRadius: 18 };
                }
                onPress();
              }}
            >
              <Text style={[styles.txtStyle, titleStyle]}>{title}</Text>
            </TouchableOpacity>
          )}
        </Animated.View>
      ) : (
        <View
          style={[
            styles.btnStyle,
            {
              borderRadius: loader ? 18 : 25,
            },
            style,
          ]}
        >
          {iconname ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onPress}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomIcon name={iconname} size={iconsize} color={iconColor} />
            </TouchableOpacity>
          ) : loader ? (
            <View>
              <ActivityIndicator size="small" color={BaseColor.blueLight} />
            </View>
          ) : done ? (
            <View>
              <CustomIcon
                name={iconname || "check"}
                size={18}
                color={BaseColor.blueLight}
              />
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                if (anim) {
                  animation.value = { width: "22%", borderRadius: 18 };
                }
                onPress();
              }}
            >
              <Text style={[styles.txtStyle, titleStyle]}>{title}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </>
  );
};

export default CButton;
