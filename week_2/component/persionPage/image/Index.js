import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const imgData = [
  { id: 1, imgSource: require("../../../assets/image/1.jpg") },
  { id: 2, imgSource: require("../../../assets/image/2.jpg") },
  { id: 3, imgSource: require("../../../assets/image/3.jpg") },
  { id: 4, imgSource: require("../../../assets/image/4.jpg") },
  { id: 5, imgSource: require("../../../assets/image/5.jpg") },
  { id: 6, imgSource: require("../../../assets/image/6.jpg") },
];

function Index({ navigation }) {
  const centerImgData = Math.floor(imgData.length / 2);

  return (
    <View style={styles.viewImage}>
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        <View style={{ flexDirection: "column" }}>
          {imgData.slice(0, centerImgData).map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate("ImageDetailPage", item)}
            >
              <Image source={item.imgSource} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flexDirection: "column" }}>
          {imgData.slice(centerImgData).map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate("ImageDetailPage", item)}
            >
              <Image source={item.imgSource} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewImage: {
    flex: 8,
    marginVertical: 10,
    marginBottom: 40,
  },
  scrollStyle: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 10,
  },
});

export default Index;
