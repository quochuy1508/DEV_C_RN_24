import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
function Index({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.arrow}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.dot}>
        <Entypo
          name="dots-three-vertical"
          size={18}
          color="black"
          style={{ position: "relative", left: 6 }}
        />
        <Entypo name="dots-three-vertical" size={18} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 10,
    // backgroundColor: "green",
    flexDirection: "row",
    alignContent: "space-between",
    color: "white",
  },
  arrow: {
    // alignSelf: "flex-start",
    flex: 1,
    // justifyContent: "",
    justifyContent: "center",
    marginLeft: 25,
  },
  dot: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 25,
  },
});

export default Index;
