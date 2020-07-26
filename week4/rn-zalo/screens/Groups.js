import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function GroupsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Groups Screen</Text>
    </View>
  );
}

export default function Contacts() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Groups" component={GroupsScreen}/>
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