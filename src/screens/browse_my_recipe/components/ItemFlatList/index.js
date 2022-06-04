import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale, scaleHeight} from '../../../../utils';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import colors from '../../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ButtonFunction, ItemTextAndText} from '../../../../components';

const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.view}>
      <Image style={styles.images} source={item.images[0]} />
      <View style={styles.viewBottomImage}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.viewBottom}>
          <ItemTextAndText
            style={styles.textBottom}
            number1={'± 5'}
            text1={'mins'}
            number2={'4'}
            text2={'ingredients'}
          />
          <ButtonFunction
            Icon={Ionicons}
            nameIcon={'ios-play-outline'}
            text={'Cook'}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Item);

const styles = StyleSheet.create({
  view: {
    marginTop: scaleHeight(20),
    borderRadius: scale(10),
    backgroundColor: colors.white,
    overflow: 'hidden',
    paddingBottom: scaleHeight(10),
    shadowColor: colors.black,
    elevation: 10,
  },
  images: {
    width: '100%',
    height: scaleHeight(118),
    overflow: 'hidden',
  },
  name: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZE.LARGE,
    color: colors.black,
  },
  viewBottomImage: {
    marginTop: scaleHeight(17),
    marginHorizontal: scale(16),
  },
  viewBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleHeight(15),
  },
});
