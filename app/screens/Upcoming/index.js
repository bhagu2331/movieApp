import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	FlatList,
	Image,
	RefreshControl,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import BaseColor from "../../config/colors";
import styles from "./styles";
import FAIcon from "react-native-vector-icons/FontAwesome";

const Upcoming = ({ navigation }) => {
	const [events, setevents] = useState([]);

	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		getLatest();
	}, []);

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		getLatest();
	}, []);

	const getLatest = () => {
		setRefreshing(true);
		fetch("http://3.17.216.66:4000/upcomingMovies")
			.then((response) => response.json())
			.then((response) => {
				console.log(
					"🚀 ~ file: index.js ~ line 10 ~ .then ~ response",
					response
				);
				setevents(response);
				setRefreshing(false);
			})
			.catch((error) => {
				console.log("🚀 ~ file: index.js ~ line 14 ~ getLatest ~ error", error);
				setRefreshing(false);
			});
	};

	const onPress = () => {
		navigation.navigate("DetailPage");
	};

	const renderCard = ({ item, index }) => {
		return (
			<TouchableOpacity
				style={styles.rootCard}
				activeOpacity={0.7}
				onPress={() => {
					navigation.navigate("DetailPage", { id: item._id });
				}}
			>
				<View>
					<Image source={{ uri: item.imageUrl }} style={styles.img} />
				</View>
				<View style={{ flex: 1, marginStart: 8 }}>
					<Text style={styles.name}>{item.name}</Text>
					<View style={{ flexDirection: "row" }}>
						<Text style={styles.regTxt}>Type:</Text>
						<Text
							style={[
								styles.regTxt,
								{ color: BaseColor.textGrey, marginStart: 8 },
							]}
						>
							{item.type}
						</Text>
					</View>
					<View style={{ flexDirection: "row", flex: 1 }}>
						<Text style={styles.regTxt}>Languages:</Text>
						<Text
							style={[
								styles.regTxt,
								{ color: BaseColor.textGrey, marginStart: 8 },
							]}
						>
							{item.language}
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
								{item.rate}
							</Text>
						</View>
						<Text
							style={[
								styles.regTxt,
								{ color: BaseColor.blackColor, marginStart: 8 },
							]}
						>
							Details {">>>"}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={{ flex: 1, backgroundColor: BaseColor.whiteColor }}>
			<StatusBar backgroundColor={BaseColor.blueDark} barStyle="light-content" />
			<View style={styles.actionBar}>
				<Text style={styles.header}>Upcoming Movies</Text>
			</View>
			{refreshing ? (
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<ActivityIndicator size={32} color={BaseColor.blueDark} />
				</View>
			) : (
				<FlatList
					keyExtractor={(item, index) => index}
					data={events}
					renderItem={renderCard}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
				/>
			)}
		</View>
	);
};

export default Upcoming;
