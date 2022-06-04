import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../../constants/colors';
import {FONT_FAMILY} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const ItemCategory = ({item, chooseId, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onPress(item)}>
      <Text
        style={[
          styles.textCategory,
          {color: chooseId == item.id ? colors.black : colors.gray},
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(ItemCategory);

const styles = StyleSheet.create({
  textCategory: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: scale(20),
    marginRight: scale(30),
  },
});
