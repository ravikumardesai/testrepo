import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import HomeNav from './HomeNav';
import Profile from '../screens/Profile';
import BecomeTeacher from '../screens/Profile/BecomeTeacher';
import Congratulation from '../screens/Profile/Congratulation';
import Donation from '../screens/Donation';
import EnrollmentRequest from '../screens/Profile/EnrollmentRequest';

const Stack = createStackNavigator();
const AuthTrue = () => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator>
     <Stack.Screen name='HomeNav' component={HomeNav} options={{headerShown:false}}/>
     <Stack.Screen name='becomeTeacher' component={BecomeTeacher} options={{headerShown:false}}/>
     <Stack.Screen name='congratulation' component={Congratulation} options={{headerShown:false}}/>
     <Stack.Screen name='donation' component={Donation} options={{headerShown:false}}/>
     <Stack.Screen name='enrollmentRequest' component={EnrollmentRequest} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthTrue;
