import React from 'react';
import { View, Button } from 'react-native';

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button title="Week 2" onPress={() => navigation.navigate('Persional Page')} />
			<Button title="Week 3" onPress={() => navigation.navigate('Week3')} />
		</View>
	);
}

export default HomeScreen;
