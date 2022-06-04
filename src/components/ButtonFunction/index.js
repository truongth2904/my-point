import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {scale, scaleHeight} from '../../utils';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';

const ButtonFunction = ({Icon, nameIcon, text, onPress, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.3}
      style={[styles.view, style]}>
      {!!Icon && (
        <Icon name={nameIcon} size={scale(14)} color={colors.success} />
      )}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonFunction);

const styles = StyleSheet.create({
  text: {
    color: colors.success,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    marginLeft: scale(6),
  },
  view: {
    flexDirection: 'row',
    borderRadius: scale(5),
    borderWidth: 1,
    borderColor: colors.success,
    padding: scale(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
