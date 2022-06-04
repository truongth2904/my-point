import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from '../../utils';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';

const ButtonBack = ({onPressBack, text, isColorWhite}) => {
  return (
    <TouchableOpacity onPress={onPressBack} style={styles.view}>
      <Ionicons
        size={scale(22)}
        color={isColorWhite ? colors.white : colors.gray}
        name={'chevron-back'}
      />
      <Text style={[styles.text, isColorWhite ? {color: colors.white} : null]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonBack);

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.gray,
    fontSize: FONT_SIZE.SMALL,
    marginLeft: scale(4),
  },
});
