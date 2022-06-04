import React, {useRef, useState} from 'react';
import styles from './home.style';
import {StatusBar, View, Text} from 'react-native';

const HomeView = () => {
  return (
    <View>
      <StatusBar animated={true} backgroundColor="red" />
      <Text style={styles.titleScreen}>{'Trang chủ'}</Text>
    </View>
  );
};

export default React.memo(HomeView);
