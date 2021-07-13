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
		height: 320,
		width: "100%",
	},
	name: {
		color: BaseColor.blueDark,
		fontWeight: "bold",
		fontSize: 32,
	},
	regTxt: {
		color: BaseColor.blackColor,
		fontSize: 20,
		fontWeight: "bold",
	},
	btn: {
		backgroundColor: BaseColor.blueDark,
		height: 50,
		borderRadius: 60,
		margin: 16,
		justifyContent: "center",
		alignItems: "center",
	},
});
