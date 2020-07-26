import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ContactsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Contacts Screen</Text>
    </View>
  );
}

export default function Contacts() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contacts" component={ContactsScreen}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});