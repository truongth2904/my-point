import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import colors from '../../constants/colors';
import {FONT_FAMILY} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const CustomButton = ({title, onPress, isPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={isPress ? 0.5 : 1}
      onPress={isPress ? onPress : null}
      style={[
        styles.viewTouch,
        !isPress ? {backgroundColor: 'rgba(48, 190, 118, 0.2)'} : {},
      ]}>
      <Text style={styles.textTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(CustomButton);

const styles = StyleSheet.create({
  viewTouch: {
    backgroundColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scaleHeight(14),
    borderRadius: scale(8),
  },
  textTitle: {
    color: colors.white,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: scale(16),
  },
});
