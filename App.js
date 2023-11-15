import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './pages/Home';
import Profile from './pages/Profile';
import NameScreen from './pages/NameScreen';
import RegNoScreen from './pages/RegNoScreen';
import ContactsScreen from './pages/ContactsScreen';
import AllInfoScreen from './pages/AllInfoScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Name') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'RegNo') {
            iconName = focused ? 'format-list-numbered' : 'format-list-numbered';
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'contacts' : 'contacts';
          } else if (route.name === 'AllInfo') {
            iconName = focused ? 'info' : 'info-outline';
          }
          

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: true,
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Name" component={NameScreen} />
      <Tab.Screen name="RegNo" component={RegNoScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="AllInfo" component={AllInfoScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProfileScreen" component={Profile} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
