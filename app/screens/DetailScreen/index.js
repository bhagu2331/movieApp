import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	Image,
	Modal,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import BaseColor from "../../config/colors";
import styles from "./styles";
import FAIcon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "../../components/DateTimePicker";
import moment from "moment";
import DropDown from "../../components/DropDown";
import AuthAction from "../../redux/reducers/auth/actions";
import { useDispatch } from "react-redux";

export default function DetailPage({ navigation, route }) {
	const { setMovieDetail } = AuthAction;
	const dispatch = useDispatch();
	const movieID = route.params.id;
	const [details, setdetails] = useState({});
	const [refreshing, setRefreshing] = useState(false);
	const [showModal, setshowModal] = useState(false);

	const [pickerVisible, setpickerVisible] = useState(false);
	const [selectedDate, setselectedDate] = useState(
		moment().format("MM/DD/YYYY")
	);

	const avTime = [
		{
			title: "09AM",
		},
		{
			title: "11AM",
		},
		{
			title: "01PM",
		},
		{
			title: "03PM",
		},
		{
			title: "05PM",
		},
		{
			title: "07PM",
		},
		{
			title: "09PM",
		},
		{
			title: "11PM",
		},
		{
			title: "01AM",
		},
		{
			title: "03AM",
		},
	];

	const [selectedTime, setselectedTime] = useState({
		title: "09AM",
	});

	const acSeat = [
		{
			title: 1,
		},
		{
			title: 2,
		},
		{
			title: 3,
		},
		{
			title: 4,
		},
		{
			title: 5,
		},
		{
			title: 6,
		},
	];

	const [selectedSeat, setselectedSeat] = useState({
		title: 1,
	});

	useEffect(() => {
		getDetails();
	}, []);

	const getDetails = () => {
		setRefreshing(true);

		const url = "http://3.17.216.66:4000/latest/" + movieID;
		console.log("🚀 ~ file: index.js ~ line 19 ~ getDetails ~ url", url);

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				console.log(
					"🚀 ~ file: index.js ~ line 10 ~ .then ~ response",
					response
				);
				setdetails(response);
				setRefreshing(false);
			})
			.catch((error) => {
				console.log("🚀 ~ file: index.js ~ line 14 ~ getLatest ~ error", error);
				setdetails({
					_id: "5ab12678f36d2879268f291d",
					name: "Temp Movie",
					language: "ENGLISH",
					type: "Adventure Animation Family",
					rate: 5,
					imageUrl: "https://image.ibb.co/dQwWSx/coco.jpg",
				});
				setRefreshing(false);
			});
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.actionBar}>
				<Text style={styles.header}>Details</Text>
			</View>
			{refreshing ? (
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<ActivityIndicator size={32} color={BaseColor.blueDark} />
				</View>
			) : (
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Image
						source={{ uri: details.imageUrl }}
						style={[styles.img, { zIndex: 10 }]}
						resizeMode="contain"
					/>
					<Image
						source={{ uri: details.imageUrl }}
						style={[styles.img, { position: "absolute", zIndex: 1 }]}
						blurRadius={4}
					/>
					<View style={{ flex: 1, padding: 8, alignItems: "center" }}>
						<Text style={[styles.name]}>{details.name}</Text>
						<Text
							style={[
								styles.regTxt,
								{ color: BaseColor.textGrey, marginStart: 8 },
							]}
						>
							{details.type}
						</Text>
						<Text
							style={[
								styles.regTxt,
								{ color: BaseColor.textGrey, marginStart: 8 },
							]}
						>
							{moment().format("MM/DD/YYYY")}
						</Text>
						<Text
							style={[
								styles.regTxt,
								{ color: BaseColor.textGrey, marginStart: 8 },
							]}
						>
							{details.language}
						</Text>
						<Text
							style={[
								styles.regTxt,
								{ color: BaseColor.textGrey, marginStart: 8 },
							]}
						>
							{`2:33Hr`}
						</Text>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<FAIcon name="star" size={16} color={BaseColor.yellow} />
							<Text
								style={[
									styles.regTxt,
									{ color: BaseColor.yellow, marginStart: 8 },
								]}
							>
								{details.rate}
							</Text>
						</View>
					</View>

					<TouchableOpacity
						style={styles.btn}
						activeOpacity={0.7}
						onPress={() => {
							setshowModal(true);
							// navigation.navigate("Book", { book: details });
						}}
					>
						<Text
							style={{
								color: BaseColor.whiteColor,
								fontSize: 18,
								fontWeight: "bold",
							}}
						>
							Book Now
						</Text>
					</TouchableOpacity>
				</ScrollView>
			)}
			<Modal
				animationType="slide"
				visible={showModal}
				transparent
				onRequestClose={() => {
					setshowModal(false);
				}}
			>
				<View
					style={{
						flex: 1,
						backgroundColor: BaseColor.white50,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<View
						style={{
							width: "90%",
							padding: 16,
							backgroundColor: BaseColor.whiteColor,
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 4,
							},
							shadowOpacity: 0.3,
							shadowRadius: 4.65,
							elevation: 8,
						}}
					>
						<Text
							style={{
								color: BaseColor.alertRed,
								fontSize: 18,
								fontWeight: "bold",
							}}
						>{`Book Ticket`}</Text>
						<Text style={[styles.regTxt, { fontSize: 14 }]}>
							{details.name}
						</Text>
						<Text style={[styles.regTxt, { fontSize: 14 }]}>
							{details.type}
						</Text>
						<Text style={[styles.regTxt, { fontSize: 14 }]}>
							{details.language}
						</Text>

						<Text
							style={[
								styles.regTxt,
								{ fontSize: 14, marginTop: 12, color: BaseColor.blueDark },
							]}
						>
							Select Date
						</Text>
						<DateTimePicker
							visible={pickerVisible}
							onConfirm={(val) => {
								setpickerVisible(!pickerVisible);
								setselectedDate(moment(val).format("MM/DD/YYYY"));
							}}
							value={selectedDate}
							mode={"date"}
							onPress={() => {
								setpickerVisible(!pickerVisible);
							}}
							containerStyle={{ width: "100%" }}
						/>
						<Text
							style={[
								styles.regTxt,
								{ fontSize: 14, marginTop: 12, color: BaseColor.blueDark },
							]}
						>
							Select Time
						</Text>
						<DropDown
							data={avTime}
							style={{ borderRadius: 0, marginEnd: 4 }}
							valueProp="title"
							onSelect={(val) => {
								// setHeight(val);
								// setstate({ ...state, height: val });
								setselectedTime(val);
							}}
							selectedObject={selectedTime}
						/>

						<Text
							style={[
								styles.regTxt,
								{ fontSize: 14, marginTop: 12, color: BaseColor.blueDark },
							]}
						>
							Select Seat
						</Text>
						<DropDown
							data={acSeat}
							style={{ borderRadius: 0, marginEnd: 4 }}
							valueProp="title"
							onSelect={(val) => {
								// setHeight(val);
								// setstate({ ...state, height: val });
								setselectedSeat(val);
							}}
							selectedObject={selectedSeat}
						/>
						<View style={[{ flexDirection: "row", width: "100%" }]}>
							<TouchableOpacity
								style={[
									styles.btn,
									{ flex: 1, margin: 4, marginTop: 26, marginBottom: 0 },
								]}
								activeOpacity={0.7}
								onPress={() => {
									setshowModal(false);
								}}
							>
								<Text
									style={{
										color: BaseColor.whiteColor,
										fontSize: 18,
										fontWeight: "bold",
									}}
								>
									Cancel
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[
									styles.btn,
									{
										flex: 1,
										margin: 4,
										marginTop: 26,
										marginBottom: 0,
										backgroundColor: BaseColor.yellow,
									},
								]}
								activeOpacity={0.7}
								onPress={() => {
									setshowModal(false);
									const tempObj = {
										ticket: details,
										date: selectedDate,
										time: selectedTime,
										seat: selectedSeat,
									};

									dispatch(setMovieDetail(tempObj));

									navigation.navigate("Book");
								}}
							>
								<Text
									style={{
										color: BaseColor.whiteColor,
										fontSize: 18,
										fontWeight: "bold",
									}}
								>
									Submit
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}
