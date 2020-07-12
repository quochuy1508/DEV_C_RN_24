import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../header/Index";
import Menu from "../menu/Index";
import { Fontisto, SimpleLineIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
const FOLLOW_COLOR = "rgb(71,113,246)";

function Index({ route, navigation }) {
  const { id, imgSource } = route.params;
  return (
    <View style={styles.container}>
      <Header />
      <Image source={imgSource} style={styles.image} />
      <View style={styles.infoDetailImage}>
        <View style={styles.textImage}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            Gái xinh Tập {id}
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <SimpleLineIcons name="location-pin" size={14} color="black" />
            <Text style={{ flex: 2, fontSize: 12, color: "#cbccc4" }}>
              {" "}
              Hello World
            </Text>
          </View>
        </View>
        <View style={styles.btnDownload}>
          <Fontisto
            name="cloud-down"
            size={24}
            color="white"
            style={{ textAlign: "center" }}
          />
        </View>
      </View>
      <View style={styles.introduce}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          deleniti,
        </Text>
      </View>
      <Menu navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginHorizontal: 20,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 30,
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    borderRadius: 30,
    position: "absolute",
    top: 0,
    zIndex: -10,
  },
  infoDetailImage: {
    marginTop: 150,
    flexDirection: "row",
    justifyContent: "space-around",
    // alignContent: "center",
  },
  textImage: {
    alignItems: "flex-start",
  },
  btnDownload: {
    backgroundColor: FOLLOW_COLOR,
    width: 50,
    height: 50,
    // alignItems: "center",
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
  },
  introduce: {
    textAlign: "center",
    marginHorizontal: 34,
  },
});

export default Index;
