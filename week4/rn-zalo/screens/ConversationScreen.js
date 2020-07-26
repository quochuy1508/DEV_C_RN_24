import React from "react";
import { Image, Text, ScrollView, StyleSheet } from "react-native";

export default function ConversationScreen(props) {
  const message = props.route.params.message;
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Image
            source={{ uri: message.avatar_url }}
            style={{
            width: 200,
            height: 200
            }}
        />
        <Text style={{fontWeight: "bold", fontSize: 20}}>{message.first_name}</Text>
        <Text>{message.last_message_content}</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});