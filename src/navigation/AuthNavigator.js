import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthTrue from './AuthTrue';
import AuthFalse from './AuthFalse';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import HomeNav from './HomeNav';
import BecomeTeacher from '../screens/Profile/BecomeTeacher';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
          <Stack.Screen name='unAuth' component={AuthFalse} options={{headerShown:false}}/>
          <Stack.Screen name='auth' component={AuthTrue} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default AuthNavigator