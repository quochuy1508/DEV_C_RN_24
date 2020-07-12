import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
function Index({ navigation }) {
  return (
    <View style={styles.menu}>
      <View style={styles.itemCount}>
        <Entypo name="menu" size={24} color="black" />
      </View>
      <View style={styles.itemCount}>
        <MaterialCommunityIcons
          name="plus-circle-outline"
          size={30}
          color="black"
        />
      </View>
      <View style={styles.itemCount}>
        <SimpleLineIcons
          name="user"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    // flex: 1,
    position: "absolute",
    bottom: 0,
    // alignSelf: "center",
    alignSelf: "center",
    // backgroundColor: "blue",
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
  },

  itemCount: {
    alignItems: "center",
    marginHorizontal: 40,
  },
});

export default Index;
