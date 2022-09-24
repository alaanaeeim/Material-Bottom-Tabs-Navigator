import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../../screens/DetailsScreen';

const Stack = createStackNavigator();

const DetailsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#002D6D'},
        headerTitleStyle: {color: '#fff'},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default DetailsStack;
