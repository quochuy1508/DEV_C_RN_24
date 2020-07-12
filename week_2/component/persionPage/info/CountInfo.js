import React from "react";
import { View, StyleSheet, Text } from "react-native";

function CountInfo() {
  return (
    <View style={styles.countInfo}>
      <View style={styles.itemCount}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>210</Text>
        <Text style={{ fontSize: 12, color: "#cbccc4" }}>Photos</Text>
      </View>
      <View style={styles.itemCount}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>15k</Text>
        <Text style={{ fontSize: 12, color: "#cbccc4" }}>Followers</Text>
      </View>
      <View style={styles.itemCount}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>605</Text>
        <Text style={{ fontSize: 12, color: "#cbccc4" }}>Following</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  countInfo: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  itemCount: {
    alignItems: "center",
  },
});
export default CountInfo;
