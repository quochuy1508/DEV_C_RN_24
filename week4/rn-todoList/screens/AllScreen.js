import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { TODOS } from '../utils/data';
import TodoItem from '../components/TodoItem'

export default function AllScreen(props) {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState('');

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody('');
  };
  
  const onToggleTodo = id => {
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
    setTimeout(() => {
      props.navigation.navigate('SingleTodoScreen', {
        updatedTodo: todo
      });
    }, 1000)
  };

  const onDeleteTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <ImageBackground style={styles.container} source={{ uri: 'https://www.fonewalls.com/wp-content/uploads/2019/10/Gradient-Background-Wallpaper-001-768x1664.jpg' }}>
      <KeyboardAvoidingView
        enabled
        behavior="padding"
      >
        <ScrollView style={{ flex: 1 }}>
          <View style={{ marginTop: "200%" }}>
            {todoList.map((todo, idx) => {
              return <TodoItem key={todo.body} todo={todo} idx={idx} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo}/>;
            })}
          </View>
          <View style={styles.inputContainer}>
              <TextInput
                value={todoBody}
                style={styles.todoInput}
                onChangeText={text => setTodoBody(text)}
                placeholder="Add new todo"
                placeholderTextColor="white"
              />
              <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
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
    justifyContent: 'center'
  },
  todoInput: {
    width: '80%',
    minHeight: 30,
    color: 'white',
    borderWidth: 1,
    marginTop: '10%',
    marginBottom: '5%',
    borderColor: 'gold',
    padding: '2%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: '40%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'gold',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  scrollView: {
    flex: 1,
    paddingTop: 1000
  }
});