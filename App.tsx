import { StatusBar } from "expo-status-bar";
import {
	Text,
	View,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";

export default function App() {
	return (
		<TouchableWithoutFeedback className="">
			<View className="flex-1 bg-black">
				<StatusBar />
			</View>
		</TouchableWithoutFeedback>
	);
}
