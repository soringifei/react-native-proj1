import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
	return (
		<View style={styles.screen}>
			<View style={styles.inputContainer}>
				<TextInput placeholder="Course Goal" />
				<Button
					style={styles.input}
					title="ADD"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: { padding: 50 },
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderColor: 'black',
		borderWidth: 1,
	},
	input: {
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
	},
});
