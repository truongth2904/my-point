import React, {memo} from 'react';
import LottieView from 'lottie-react-native';
import {animationLoading} from '../../assets/images';
import {View, StyleSheet} from 'react-native';
import {scaleHeight} from '../../utils';

const Loading = () => {
  return (
    <View style={styles.view}>
      <LottieView
        style={{width: scaleHeight(200), height: scaleHeight(200)}}
        source={animationLoading}
        autoPlay
        loop
      />
    </View>
  );
};
export default memo(Loading);
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
