import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View style={styles.view}>
      <Image source={require('../Logo/grapefruit.png')} />
      <Image source={require('../Logo/fruitall.png')} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
});
