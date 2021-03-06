import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PersionPage from './component/persionPage/Index';
import ImageDetailPage from './component/imageDetailPage/Index';
import HomeScreen from './component/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Game from './component/week3/Index';

export default function App() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="Home"
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Persional Page" component={PersionPage} />
				<Stack.Screen name="Week3" component={Game} />
				<Stack.Screen name="ImageDetailPage" component={ImageDetailPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
