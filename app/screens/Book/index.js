import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import BaseColor from "../../config/colors";
import styles from "./styles";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

export default function Book({ navigation, route }) {
	const auth = useSelector((state) => state.auth);

	const movieDetail = auth?.movieDetail;
	console.log("🚀 ~ file: index.js ~ line 18 ~ Book ~ auth", auth?.movieDetail);
	const details = movieDetail.ticket;
	const date = movieDetail.date;
	const time = movieDetail.time;
	const seat = movieDetail.seat;
	console.log(
		"🚀 ~ file: index.js ~ line 16 ~ Book ~ details",
		date,
		time,
		seat
	);

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.actionBar}>
				<Text style={styles.header}>Ticket</Text>
			</View>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<TouchableOpacity style={styles.rootCard} activeOpacity={0.7}>
					<View>
						<Image source={{ uri: details.imageUrl }} style={styles.img} />
					</View>
					<View style={{ flex: 1, marginStart: 8 }}>
						<Text style={styles.name}>{details.name}</Text>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.regTxt}>Type:</Text>
							<Text
								style={[
									styles.regTxt,
									{ color: BaseColor.textGrey, marginStart: 8 },
								]}
							>
								{details.type}
							</Text>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.regTxt}>Languages:</Text>
							<Text
								style={[
									styles.regTxt,
									{ color: BaseColor.textGrey, marginStart: 8 },
								]}
							>
								{details.language}
							</Text>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.regTxt}>Date:</Text>
							<Text
								style={[
									styles.regTxt,
									{ color: BaseColor.textGrey, marginStart: 8 },
								]}
							>
								{date}
							</Text>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.regTxt}>Time:</Text>
							<Text
								style={[
									styles.regTxt,
									{ color: BaseColor.textGrey, marginStart: 8 },
								]}
							>
								{time.title}
							</Text>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Text style={styles.regTxt}>Seat:</Text>
							<Text
								style={[
									styles.regTxt,
									{ color: BaseColor.textGrey, marginStart: 8 },
								]}
							>
								{seat.title}
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
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
					</View>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}
