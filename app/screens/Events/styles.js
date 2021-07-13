import { StyleSheet } from "react-native";
import BaseColor from "../../config/colors";

export default styles = StyleSheet.create({
	actionBar: {
		backgroundColor: BaseColor.blueDark,
		height: 80,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		color: BaseColor.whiteColor,
		fontWeight: "bold",
		fontSize: 32,
	},
	rootCard: {
		backgroundColor: BaseColor.whiteColor,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		padding: 8,
		margin: 8,
		flexDirection: "row",
	},
	img: {
		height: 120,
		width: 90,
	},
	name: {
		color: BaseColor.blueDark,
		fontWeight: "bold",
		fontSize: 22,
	},
	regTxt: {
		color: BaseColor.blackColor,
		fontSize: 16,
		fontWeight: "bold",
	},
});
