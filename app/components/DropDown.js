import { useTheme } from "@react-navigation/native";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import {
	Dimensions,
	Modal,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import BaseColor from "../config/colors";
import ADIcon from "react-native-vector-icons/AntDesign";

const DropDown = (props) => {
	const {
		data,
		onSelect = () => {},
		selectedObject = {},
		placeholder = "Placeholder",
		valueProp,
		style,
		textStyle,
		lang,
	} = props;

	const [showList, setshowList] = useState(false);

	return (
		<>
			<View
				style={[
					{
						backgroundColor: BaseColor.whiteColor,
						borderRadius: 25,
						height: 36,
						flexDirection: "row",
						alignItems: "center",
						borderWidth: 1,
						borderColor: BaseColor.lightPrimaryColor,
					},
					style,
				]}
			>
				<TouchableOpacity
					onPress={() => setshowList(true)}
					style={{
						height: "100%",
						alignItems: "center",
						flexDirection: "row",
						width: "100%",
						paddingHorizontal: 12,
					}}
				>
					<Text
						style={{
							color: BaseColor.primaryColor,
							flex: 1,
							...textStyle,
						}}
					>
						{isEmpty(selectedObject) ? placeholder : selectedObject[valueProp]}
					</Text>
					<ADIcon name="downcircleo" size={16} color={BaseColor.primaryColor} />
				</TouchableOpacity>
			</View>
			<Modal
				visible={showList}
				onRequestClose={() => setshowList(false)}
				transparent
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<TouchableOpacity
					activeOpacity={1}
					onPress={() => {
						setshowList(false);
					}}
					style={{
						flex: 1,
						backgroundColor: "#00000040",
						justifyContent: "center",
					}}
				>
					<View
						style={{
							marginHorizontal: 24,
							backgroundColor: BaseColor.whiteColor,
							borderRadius: 12,
							paddingVertical: 12,
							maxHeight: Dimensions.get("window").height / 1.5,
						}}
					>
						<ScrollView>
							{data.map((item) => (
								<TouchableOpacity
									activeOpacity={0.7}
									style={{
										backgroundColor: BaseColor.whiteColor,
										padding: 8,
									}}
									onPress={() => {
										onSelect(item);
										setshowList(false);
									}}
								>
									<Text style={{ color: BaseColor.blackColor }}>
										{item[valueProp]}
									</Text>
								</TouchableOpacity>
							))}
						</ScrollView>
					</View>
				</TouchableOpacity>
			</Modal>
		</>
	);
};

export default DropDown;
