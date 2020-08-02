import React, { Component, useState } from 'react';
import { Text, View, TouchableOpacity, Picker } from 'react-native';
import { CITIES } from './utils';
import styles from './WeatherStyle';

export default CitySelectionButtons = (props) => {
	const [selectedValue, setSelectedValue] = useState('');
	return (
		<View style={styles.currentLocation}>
			<Picker
				selectedValue={selectedValue}
				style={{
					width: '100%',
					color: 'white',
					alignSelf: 'center',
				}}
				onValueChange={(itemValue, itemIndex) => {
					props.onChooseCity(itemValue);
					setSelectedValue(itemValue);
				}}
			>
				<Picker.Item key="currentLocation" label="Current" value="" />
				{CITIES.map((city) => (
					<Picker.Item key={city.name} label={city.name} value={city.name} />
				))}
			</Picker>
		</View>
	);
};
