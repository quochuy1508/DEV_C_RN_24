import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Messages from './screens/Messages';
import Contacts from './screens/Contacts';
import Groups from './screens/Groups';
import Timeline from './screens/Timeline';
import More from './screens/More';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Messages" 
        component={Messages} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubbles" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Contacts" 
        component={Contacts} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-contacts" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Groups" 
        component={Groups} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-people" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Timeline" 
        component={Timeline} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-bookmarks" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="More" 
        component={More} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-options" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabComponent} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
