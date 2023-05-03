import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgetPassword from '../screens/ForgetPassword';

const Stack = createStackNavigator();

const AuthFalse = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name='login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='signup' component={Signup} options={{headerShown:false}}/>
            <Stack.Screen name='forgotPassword' component={ForgetPassword} options={{headerShown:false}}/>
        </Stack.Navigator>
  )
}
export default AuthFalse