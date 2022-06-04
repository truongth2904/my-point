import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, scaleHeight} from '../../../../utils';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import colors from '../../../../constants/colors';

const ItemTrending = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.view}>
      <Image style={styles.img} source={item.images[0]} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ItemTrending);

const styles = StyleSheet.create({
  view: {
    width: scale(120),
    marginRight: scale(15),
  },
  img: {
    width: scale(120),
    height: scale(140),
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
    marginTop: scaleHeight(10),
  },
});
