import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MoreScreen(props) {
  return (
    <View style={styles.container}>
      <Text>More Screen</Text>
    </View>
  );
}

export default function More() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="More" component={MoreScreen}/>
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