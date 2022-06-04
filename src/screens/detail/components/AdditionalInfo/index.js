import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {food2} from './../../../../assets/images';
import {scale, scaleHeight} from '../../../../utils';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import colors from '../../../../constants/colors';

const Item = ({item}) => (
  <View style={styles.viewItem}>
    <Image style={styles.imageItem} source={food2} />
    <Text style={styles.textItem}>{item}</Text>
  </View>
);
const AdditionalInfo = ({additionalInfo}) => {
  return (
    <View style={styles.view}>
      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Item item={item} />}
        data={additionalInfo}
      />
    </View>
  );
};

export default React.memo(AdditionalInfo);

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  imageItem: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
  },
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(8),
  },
  textItem: {
    marginLeft: scale(15),
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.black,
    fontSize: FONT_SIZE.NORMAL,
  },
});
