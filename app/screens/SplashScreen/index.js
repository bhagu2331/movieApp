import React, { useEffect } from "react";
import { Dimensions, Image, SafeAreaView, StatusBar, View } from "react-native";
import BaseColor from "../../config/colors";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";

const { height: dHeight, width: dWidth } = Dimensions.get("window");

const SplashScreen = ({ navigation }) => {
	const animation = useSharedValue({ width: 5000, height: 5000 });

	const animationStyle = useAnimatedStyle(() => {
		return {
			width: withTiming(animation.value.width, {
				duration: 2000,
			}),

			height: withTiming(animation.value.height, {
				duration: 2000,
			}),
		};
	});

	useEffect(() => {
		animation.value = { width: 0, height: 0 };

		setTimeout(() => {
			navigation.navigate("DashboardNavigationTabs");
		}, 3000);
	}, []);
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: BaseColor.whiteColor,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Image
				source={require("../../assets/images/logo.png")}
				style={{ height: 150, width: 150 }}
			/>
			<Animated.View
				style={[
					{
						backgroundColor: BaseColor.blueDark,
						position: "absolute",
						borderRadius: 5000,
					},
					animationStyle,
				]}
			></Animated.View>
		</SafeAreaView>
	);
};

export default SplashScreen;
