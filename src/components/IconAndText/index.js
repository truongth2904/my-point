import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const IconAndButton = ({onPress, Icon, nameIcon, text, styleText}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchSetting}>
      {!!Icon && <Icon name={nameIcon} color={colors.black} size={scale(20)} />}
      <Text style={[styles.textSetting, styleText]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(IconAndButton);

const styles = StyleSheet.create({
  textSetting: {
    color: colors.success,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    marginLeft: scale(10),
  },
  touchSetting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
