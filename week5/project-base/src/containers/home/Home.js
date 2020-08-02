import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Bài tập tuần 5</Text>
			<TouchableHighlight
				style={{
					height: 40,
					width: 160,
					borderRadius: 10,
					backgroundColor: 'yellow',
					marginLeft: 50,
					marginRight: 50,
					marginTop: 20,
				}}
			>
				<Button style={styles.button} onPress={() => navigation.navigate('GoogleNews')} title="Assignment" />
			</TouchableHighlight>
			<TouchableHighlight
				style={{
					height: 40,
					width: 160,
					borderRadius: 10,
					backgroundColor: 'yellow',
					marginLeft: 50,
					marginRight: 50,
					marginTop: 20,
				}}
			>
				<Button style={styles.button} onPress={() => navigation.navigate('Weather')} title="Lab" />
			</TouchableHighlight>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		flex: 1,
		color: 'green',
	},
});
export default Home;
