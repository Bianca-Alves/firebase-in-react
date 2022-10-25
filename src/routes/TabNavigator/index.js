import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHome from '../StackRoute'
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='StackHome'
        screenOptions={{
          headerShown:false,
          tabBarActiveTintColor:"red",
          tabBarInactiveTintColor:'blue',
          tabBarStyle:{
            backgroundColor:"black"
          }
        }}
      >
        <Tab.Screen name='StackHome' component={StackHome}
          options = 
          {{tabBarIcon: ({color,size}) => {
            return   <Ionicons name="home-sharp" size={size} color={color}/>
          }}}></Tab.Screen>
        <Tab.Screen name='About' component={About}
          options = 
          {{tabBarIcon: ({color,size}) => {
            return   <Ionicons name="home-sharp" size={size} color={color}/>
          }}}></Tab.Screen>
        <Tab.Screen name='Contact' component={Contact}
          options = 
          {{tabBarIcon: ({color,size}) => {
            return   <Ionicons name="information-circle-outline" size={size} color={color}/>
          }}}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


