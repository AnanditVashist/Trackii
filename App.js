import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navbar from "./navigation/Navbar";

export default function App() {
	return <NavigationContainer>
		<Navbar></Navbar>
	</NavigationContainer>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
