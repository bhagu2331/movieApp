import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BaseColor from "../config/colors";
import { CustomIcon } from "../config/LoadIcons";
import { FontFamily } from "../config/typography";
import FAIcon from "react-native-vector-icons/FontAwesome";

const TabBar = ({ state, descriptors, navigation }) => {
	const focusedOptions = descriptors[state.routes[state.index].key].options;
	const focusName = state.routes[state.index].name;
	console.log(
		"chillbaby ~ file: TabBar.js ~ line 9 ~ TabBar ~ focusName",
		focusName
	);

	if (focusedOptions.tabBarVisible === false) {
		return null;
	}

	return (
		<View
			style={{
				flexDirection: "row",
				margin: 16,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: BaseColor.whiteColor,
				borderRadius: 40,
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 6,
				},
				shadowOpacity: 0.37,
				shadowRadius: 7.49,
				elevation: 12,
			}}
		>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;
				const isFocused = state.index === index;
				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});
					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};
				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};
				return (
					<View
						style={{
							backgroundColor: BaseColor.whiteColor,
							flex: 1,
							height: 80,
							borderRadius: 40,
						}}
					>
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							style={{
								flex: 1,
								height: 80,
								backgroundColor: isFocused
									? BaseColor.blueDark
									: BaseColor.whiteColor,
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 40,
							}}
						>
							<FAIcon
								name={
									label === "UPCOMING"
										? "random"
										: label === "LATEST"
										? "video-camera"
										: "calendar"
								}
								size={20}
								color={isFocused ? BaseColor.whiteColor : BaseColor.textGrey}
							/>
							<Text
								style={{
									color: isFocused ? BaseColor.whiteColor : BaseColor.textGrey,
									fontSize: 12,
									fontFamily: FontFamily.default,
									fontWeight: "bold",
									marginTop: 4,
								}}
							>
								{label}
							</Text>
						</TouchableOpacity>
					</View>
				);
			})}
		</View>
	);
};

export default TabBar;
