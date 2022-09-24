import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExploreScreen from '../../screens/ExploreScreen';

const Stack = createStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#004156'},
        headerTitleStyle: {color: '#fff'},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
