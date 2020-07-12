import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";

const Contact = () => {
  return (
    <View style={styles.count}>
      <View style={styles.imageInfo}>
        <Image
          source={require("../../../assets/image/DSC04012.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.contractInfo}>
        <View style={styles.textFlex}>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>Ho Quoc Huy</Text>
          <Text>Fullstack Developer</Text>
        </View>

        <View style={styles.buttonFlex}>
          <View style={styles.btn1}>
            <Text style={{ color: "white" }}>Follow</Text>
          </View>
          <View style={styles.btn2}>
            <MaterialCommunityIcons name="send" size={24} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  count: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageInfo: {
    flex: 2,
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginLeft: 20,
  },
  contractInfo: {
    height: 100,
    flex: 4,
    alignItems: "flex-start",
    marginLeft: 20,
  },

  textFlex: {
    flex: 3,
  },
  buttonFlex: {
    flexDirection: "row",
    flex: 1,
    width: 200,
    justifyContent: "center",
  },
  btn1: {
    flex: 3,
    backgroundColor: FOLLOW_COLOR,
    alignItems: "center",
    borderRadius: 20,
    marginRight: 20,
  },
  btn2: {
    flex: 1,
    backgroundColor: SEND_MESSAGE_COLOR,
    alignItems: "center",
    borderRadius: 20,
    marginRight: 20,
  },
});

export default Contact;
