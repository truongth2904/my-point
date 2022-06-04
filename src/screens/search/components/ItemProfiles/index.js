import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';

const ItemProfile = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.view}>
      <Image source={item.background} style={styles.imageBackground} />
      <Image source={item.image} style={styles.avatarUser} />
      <Text style={styles.textName}>{item.name}</Text>
      <View style={styles.viewInfoUser}>
        <View style={styles.info}>
          <Text style={styles.number}>{item.likes}</Text>
          <Text style={styles.textNumber}>{'recipes'}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.number}>{item.followers}</Text>
          <Text style={styles.textNumber}>{'followers'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ItemProfile);
const styles = StyleSheet.create({
  imageBackground: {
    width: scale(175),
    height: scale(110),
    opacity: 0.7,
  },
  avatarUser: {
    width: scale(80),
    height: scale(80),
    position: 'relative',
    bottom: scale(30),
    borderRadius: scale(50),
    borderWidth: scale(5),
    borderColor: colors.white,
    shadowColor: colors.black,
    elevation: 10,
  },
  view: {
    alignItems: 'center',
    marginRight: scale(15),
  },
  textName: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
  viewInfoUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(135),
    marginTop: scaleHeight(10),
  },
  info: {
    alignItems: 'center',
  },
  number: {
    color: colors.black,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
  },
  textNumber: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.TINY,
    color: colors.gray,
  },
});
