import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PersionPage from "./component/persionPage/Index";
import ImageDetailPage from "./component/imageDetailPage/Index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Persional Page" component={PersionPage} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ImageDetailPage" component={ImageDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
