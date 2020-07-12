import React from "react";
import { View, StyleSheet } from "react-native";
import CountInfo from "./CountInfo";
import Contact from "./Contact";
function Index() {
  return (
    <View style={styles.info}>
      <Contact />
      <CountInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    flex: 4,
    marginTop: 30,
    // backgroundColor: "gray",
  },
});
export default Index;
