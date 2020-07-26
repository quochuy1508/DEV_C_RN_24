import React from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { TODOS } from '../utils/data';
import TodoItem from '../components/TodoItem'

export default function CompleteScreen() {
  let id = -1;
  return (
    <ImageBackground style={styles.container} source={{ uri: 'https://www.fonewalls.com/wp-content/uploads/2019/10/Gradient-Background-Wallpaper-001-768x1664.jpg' }}>
      <KeyboardAvoidingView
        enabled
        behavior="padding"
      >
        <ScrollView style={{ flex: 1 }}>
          <View style={{ marginTop: "200%", marginBottom: "100%" }}>
            {TODOS.map((todo) => {
              if(todo.status === "Done") {
                id++;
                return <TodoItem key={todo.body} todo={todo} idx={id} />;
              }
            })}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
});