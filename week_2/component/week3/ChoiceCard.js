import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ChoiceCard = ({ player, choice: { uri, name } }) => {
	const title = name && name.charAt(0).toUpperCase() + name.slice(1);

	return (
		<View style={styles.choiceContainer}>
			<Text style={styles.choiceDescription}>{player}</Text>
			<Image source={{ uri }} resizeMode="contain" style={styles.choiceImage} />
			<Text style={styles.choiceCardTitle}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e9ebee',
	},
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonStyle: {
		width: 200,
		margin: 10,
		height: 50,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#640D14',
	},
	buttonText: {
		fontSize: 25,
		color: 'white',
		fontWeight: 'bold',
	},
	choicesContainer: {
		margin: 10,
		borderWidth: 2,
		paddingTop: 100,
		shadowRadius: 5,
		paddingBottom: 100,
		borderColor: 'grey',
		shadowOpacity: 0.9,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		justifyContent: 'space-around',
		shadowColor: 'rgba(0,0,0,0.2)',
		shadowOffset: { height: 5, width: 5 },
	},
	choiceContainer: {
		flex: 1,
		alignItems: 'center',
	},
	choiceDescription: {
		fontSize: 25,
		color: '#250902',
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
	choiceCardTitle: {
		fontSize: 30,
		color: '#250902',
	},
	choiceImage: {
		width: 150,
		height: 150,
		padding: 10,
	},
});

export default ChoiceCard;
