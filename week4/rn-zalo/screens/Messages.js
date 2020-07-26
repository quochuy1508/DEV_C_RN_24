import React from "react";
import { FlatList, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import messages from '../messages.json';
import MessageCard from '../components/MessageCard';
import ConversationScreen from './ConversationScreen';

const Stack = createStackNavigator();

function MessagesScreen(props) {
  const onPress = (message) => {
    props.navigation.navigate('Conversation', {message: message})
  }

  const renderItem = ({item}) => {
    return <MessageCard message={item} onPress={onPress}/>
  }

  return (
    <FlatList data={messages} renderItem={renderItem} keyExtractor={(item) => item.id.toString()}/>
  );
}

export default function Messages({navigation}) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
              name="Messages" 
              component={MessagesScreen} 
              options={{
                headerLeft: () => {
                  return (
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                      <Image
                        style={{ height: 20, width: 20, marginLeft: 10 }}
                        source={{
                          uri:
                            "https://cdn3.iconfinder.com/data/icons/ui-ux-essentials-solid/24/hamburger-menu-solid-512.png"
                        }}
                      />
                    </TouchableOpacity>
                  );
                }
              }}
            />
            <Stack.Screen name="Conversation" component={ConversationScreen}/>
        </Stack.Navigator>
    )
}