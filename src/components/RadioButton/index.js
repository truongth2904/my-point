import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale} from '../../utils';

const RadioButton = ({isTick, onPressTick, text, style}) => {
  return (
    <TouchableOpacity onPress={onPressTick} style={[styles.view, style]}>
      <Fontisto
        size={FONT_SIZE.MEDIUM}
        color={isTick ? colors.success : colors.black}
        name="radio-btn-active"
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(RadioButton);

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
    marginLeft: scale(10),
  },
});
