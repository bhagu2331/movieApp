import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../screens/SplashScreen";
import TabBar from "./TabBar";
import { View } from "react-native";
import LatestMovie from "../screens/LatestMovie";
import Upcoming from "../screens/Upcoming";
import Events from "../screens/Events";
import DetailPage from "../screens/DetailScreen";
import Book from "../screens/Book";

const NavStart = () => {
	const Stack = createStackNavigator();

	const Tab = createBottomTabNavigator();

	const DashboardNavigationTabs = () => {
		return (
			<Tab.Navigator
				tabBar={(props) => {
					return (
						<View
							style={{
								backgroundColor: "#0000",
								position: "absolute",
								bottom: 0,
								right: 0,
								left: 0,
							}}
						>
							<TabBar {...props} />
						</View>
					);
				}}
			>
				<Tab.Screen name="UPCOMING" component={Upcoming} />
				<Tab.Screen name="LATEST" component={LatestMovie} />
				<Tab.Screen name="EVENTS" component={Events} />
			</Tab.Navigator>
		);
	};
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="SplashScreen"
						component={SplashScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="DashboardNavigationTabs"
						component={DashboardNavigationTabs}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="DetailPage"
						component={DetailPage}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Book"
						component={Book}
						options={{ headerShown: false }}
					/>
					{/* <Stack.Screen name="QRScanner" component={QRScanner} options={{headerShown: true}} /> */}
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default NavStart;
