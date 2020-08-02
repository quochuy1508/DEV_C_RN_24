import React from 'react';
import { registerRootComponent } from 'expo';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import Counter from './containers/counter';
import GoogleNews from './containers/googleNews';
import Weather from './containers/weather';
import Home from './containers/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = ({ params }) => (
	<Provider store={store}>
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="GoogleNews" component={GoogleNews} />
				<Stack.Screen options={{ headerShown: false }} name="Weather" component={Weather} />
				<Stack.Screen name="Counter" component={Counter} />
			</Stack.Navigator>
		</NavigationContainer>
	</Provider>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textCenter: {
		textAlign: 'center',
	},
});
registerRootComponent(App);
