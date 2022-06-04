import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import colors from '../../constants/colors';
import {scale} from '../../utils';

const ButtonDashed = ({text, style}) => {
  return (
    <TouchableOpacity style={[styles.view, style]}>
      <Ionicons color={colors.gray} name="add" size={24} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonDashed);

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'dashed',
    padding: scale(15),
    borderRadius: scale(10),
    borderWidth: scale(1),
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.gray,
  },
});
