import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTabScreen from './src/navigations/MainTabScreen';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <MainTabScreen />
      </NavigationContainer>
    </>
  );
}

export default App;
