import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BaseColor from "../../config/colors";

export default function DateTimePicker(props) {
	const {
		visible = false,
		mode = "date",
		placeholder = "MM/DD/YYYY",
		value,
		onPress = () => {},
		onConfirm = () => {},
		onCancel = () => {},
		containerStyle,
		maxDate = new Date(),
	} = props;

	return (
		<View
			style={[
				{
					height: 50,
				},
				containerStyle,
			]}
		>
			<TouchableOpacity
				onPress={onPress}
				style={[
					{
						flex: 1,
						backgroundColor: BaseColor.black40,
						height: 40,
						borderWidth: 1,
						borderColor: BaseColor.blackColor,
						justifyContent: "center",
						paddingHorizontal: 16,
					},
				]}
			>
				{value ? (
					<Text
						style={{
							color: BaseColor.blackColor,
							fontSize: 14,
						}}
					>
						{value}
					</Text>
				) : (
					<Text
						style={{
							color: BaseColor.blackColor,
							fontSize: 14,
						}}
					>
						{placeholder}
					</Text>
				)}
			</TouchableOpacity>
			{visible ? (
				<DateTimePickerModal
					isVisible={visible}
					mode={mode}
					onConfirm={onConfirm}
					onCancel={onCancel}
					minimumDate={maxDate}
				/>
			) : null}
		</View>
	);
}
