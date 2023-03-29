import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import Home from '../screen/HomeScreen/Home';
import LeaderBoardScreen from '../screen/LeaderBoardScreen/LeaderBoardScreen';
import AccountScreen from '../screen/AccountScreen/AccountScreen';
import MainView from '../screen/MainView';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs({user, navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Message"
      activeColor="#1194FF"
      barStyle={{backgroundColor: '#F2F4F9'}}>
      <Tab.Screen
        name="Message"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Address"
        component={LeaderBoardScreen}
        options={{
          tabBarLabel: 'LeaderBoard',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="chart-timeline-variant-shimmer"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
