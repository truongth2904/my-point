import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import colors from '../../constants/colors';
import Octicons from 'react-native-vector-icons/Octicons';
import {scale, scaleHeight} from '../../utils';

const ItemTextAndText = ({number1, number2, text1, text2, style}) => {
  return (
    <View style={[styles.view, style]}>
      <View style={styles.viewItem}>
        <Text style={styles.number}>{number1}</Text>
        <Text style={styles.text}> {text1}</Text>
      </View>
      <Octicons
        style={styles.iconDot}
        name="dot-fill"
        size={scale(10)}
        color={colors.gray}
      />
      <View style={styles.viewItem}>
        <Text style={styles.number}>{number2}</Text>
        <Text style={styles.text}> {text2}</Text>
      </View>
    </View>
  );
};

export default memo(ItemTextAndText);

const styles = StyleSheet.create({
  number: {
    color: colors.gray,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
  },
  viewItem: {
    flexDirection: 'row',
  },
  text: {
    color: colors.gray,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDot: {
    paddingHorizontal: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
