import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../header/Index";
import Info from "./info/Index";
import Image from "./image/Index";
import Menu from "../menu/Index";

const Index = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Info />
      <Image navigation={navigation} />
      <Menu navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginHorizontal: 20,
    justifyContent: "center",
    marginTop: 20,
  },
});
export default Index;
