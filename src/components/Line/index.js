import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {scale, scaleHeight} from '../../utils';
import colors from '../../constants/colors';

const Line = () => {
  return <View style={styles.view} />;
};

export default memo(Line);

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: scale(1),
    backgroundColor: colors.gray,
    marginVertical: scaleHeight(15),
  },
});
