import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
	return (
		<View style={{ padding: 30 }}>
			<View>
				<TextInput
					placeholder="Course Goal"
					style={{ borderColor: 'black', borderWidth: 1 }}
				/>
				<Button title="ADD" />
			</View>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({});
