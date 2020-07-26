import * as React from 'react';
import { Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CompleteScreen from './screens/CompleteScreen';
import AllScreen from './screens/AllScreen';
import ActiveScreen from './screens/ActiveScreen';
import SingleTodoScreen from './screens/SingleTodoScreen';

const Tab = createBottomTabNavigator();
const Stack =createStackNavigator();

function All () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All Todos" component={AllScreen}/>
      <Stack.Screen name="SingleTodoScreen" component={SingleTodoScreen}/>
    </Stack.Navigator>
  );
}

function Com () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Done" component={CompleteScreen}/>
    </Stack.Navigator>
  );
}

function Act () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Active Todos" component={ActiveScreen}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Complete') {
              iconName = 'ios-done-all';
            } else if (route.name === 'All') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            }
            else if (route.name === 'Active') {
              iconName = 'ios-menu';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'lightskyblue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Complete" component={Com} />
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Active" component={Act} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
