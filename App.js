import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/redux/store/configureStore";
import NavStart from "./app/navigation";
import { StatusBar } from "react-native";
import BaseColor from "./app/config/colors";

const App: () => React$Node = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);
	return (
		<>
			<StatusBar
				backgroundColor={BaseColor.whiteColor}
				barStyle="dark-content"
			/>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NavStart />
				</PersistGate>
			</Provider>
		</>
	);
};

export default App;
