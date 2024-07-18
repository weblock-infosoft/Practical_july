import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventView from '../Screen/EventView';
import Registration1 from '../Screen/Signup/Registration1';
import Registration2 from '../Screen/Signup/Registration2';
import Registration3 from '../Screen/Signup/Registration3';
import Registration4 from '../Screen/Signup/Registration4';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration1">
        <Stack.Screen name="Registration1" component={Registration1} options={{headerShown:false}}/>
        <Stack.Screen name="Registration2" component={Registration2} options={{headerShown:false}}/>
        <Stack.Screen name="Registration3" component={Registration3} options={{headerShown:false}}/>
        <Stack.Screen name="Registration4" component={Registration4} options={{headerShown:false}}/>
        <Stack.Screen name="EventView" component={EventView} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
