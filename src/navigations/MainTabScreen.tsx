/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import HomeStack from './stackNavigations/HomeStack';
import DetailsStack from './stackNavigations/DetailsStack';
import ProfileStack from './stackNavigations/ProfileStack';
import ExploreStack from './stackNavigations/ExploreStack';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{backgroundColor: '#09203F'}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#0043A4',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="DetailsScreen"
        component={DetailsStack}
        options={{
          tabBarBadge: 3,
          tabBarLabel: 'Details',
          tabBarColor: '#002D6D',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#0260E8',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreStack}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#004156',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="gear" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
