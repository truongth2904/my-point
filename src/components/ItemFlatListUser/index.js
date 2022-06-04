import React, {memo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {scale, scaleHeight} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../constants/screenNames';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import colors from '../../constants/colors';

const Item = ({item, onPress}) => {
  
  const nameString = item.name.split(' ');
  const name = nameString[0] + ' ' + nameString[1];
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.item}>
      <Image style={styles.imageItem} source={item.images[0]} />

      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default memo(Item);
const styles = StyleSheet.create({
  imageItem: {
    width: '100%',
    height: scale(100),
  },
  item: {
    alignItems: 'center',
    margin: scale(3),
    borderRadius: scale(10),
    alignItems: 'center',
    backgroundColor: colors.white,
    width: scale(150),
    marginTop: scaleHeight(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: scale(5),
    overflow: 'hidden',
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.black,
    fontSize: FONT_SIZE.MEDIUM,
  },
});
