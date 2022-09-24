import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ExploreScreen = () => {
  return (
    <View style={styles.constainer}>
      <Text>Explore Screen</Text>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
