import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.constainer}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
