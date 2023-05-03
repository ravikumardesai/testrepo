import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import TeachersScreen from '../screens/TeachersScreen';
import BrothersScreen from '../screens/BrothersScreen';
import MyCourse from '../screens/MyCourse';
import Profile from '../screens/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import BecomeTeacher from '../screens/Profile/BecomeTeacher';

const homeActive = require('../res/home_active.png');
const homeInActive = require('../res/home_inactive.png');
const teacherActive = require('../res/teacher_active.png');
const teachetInActive = require('../res/teachers_inactive.png');
const brothersActive = require('../res/brothers_active.png');
const brothersInActive = require('../res/brothers_inactive.png');
const courseActive = require('../res/my_course_active.png');
const courseInActive = require('../res/my_course_inactive.png');
const profileActive = require('../res/profile_active.png');
const profileInActive = require('../res/profile_inactive.png');

const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('window');
const FOCUSED_COLOR = '#000';
const UNFOCUSED_COLOR = '#626262';

const Stack = createStackNavigator();

const HomeNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: FOCUSED_COLOR,
        tabBarInactiveTintColor: UNFOCUSED_COLOR,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? homeActive : homeInActive;
          } else if (route.name === 'Teachers') {
            iconName = focused ? teacherActive : teachetInActive;
          } else if (route.name === 'Brothers') {
            iconName = focused ? brothersActive : brothersInActive;
          } else if (route.name === 'My Courses') {
            iconName = focused ? courseActive : courseInActive;
          } else if (route.name === 'Profile') {
            iconName = focused ? profileActive : profileInActive;
          }
          return <Image source={iconName} style={styles.iconStyle} />;
        },
        tabBarStyle: {
          ...styles.tabBarStyle,
        },
        // tabBarLabel:({focused})=>{
        //     let tabBarName;
        //     if (route.name === 'HomeScreen') {
        //         tabBarName = "Home"
        //       } else if (route.name === 'TeachersScreen') {
        //         tabBarName = "Teachers"
        //       } else if (route.name === 'BrothersScreen') {
        //         tabBarName = "Brothers"
        //       } else if (route.name === 'MyCoursesScreen') {
        //         tabBarName = "My Courses"
        //       } else if (route.name === 'ProfileScreen') {
        //         tabBarName = "profile"
        //       }
        //     return(
        //         focused
        //         ?
        //         <Text style={{color: FOCUSED_COLOR,...styles.navBarLabel}}>
        //           {tabBarName}
        //         </Text>
        //         :
        //         <Text style={{color: UNFOCUSED_COLOR,...styles.navBarLabel}}>
        //           {tabBarName}
        //         </Text>
        //     )
        // }
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Teachers"
        component={TeachersScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Brothers"
        component={BrothersScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="My Courses"
        component={MyCourse}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  navBarLabel: {
    fontSize: 15,
    fontFamily: 'poppins_regular',
  },
  tabBarStyle: {
    height: width / 7,
    backgroundColor: '#CEE7FE',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
