import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {food2} from './../../../../assets/images';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';

const HowToCook = ({listHowToCook}) => {
  return (
    <ScrollView style={styles.view}>
      {listHowToCook.map((element, index) => (
        <View style={styles.viewHowToCookItem}>
          <Text style={styles.borderNumber}>{index + 1}</Text>
          <Text style={styles.textHowToCookItem}>{element}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default React.memo(HowToCook);

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
  },
  borderNumber: {
    color: colors.success,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    borderColor: colors.success,
    borderWidth: scale(1),
    borderRadius: scale(50),
    width: scale(20),
    height: scale(20),
    textAlign: 'center',
  },
  viewHowToCookItem: {
    flexDirection: 'row',
    marginTop: scaleHeight(25),
  },
  textHowToCookItem: {
    marginLeft: scale(15),
    color: colors.black,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    width: scale(260),
  },
});
