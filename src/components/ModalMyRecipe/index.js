import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  DeviceEventEmitter,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale, scaleHeight} from '../../utils';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';

const ModalMyRecipe = ({listCookBook, isVisible, itemChoose, onPressItem}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => onPressItem({item})}>
      <Text
        style={[
          styles.itemText,
          item.value == itemChoose ? {backgroundColor: colors.success} : {},
        ]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );
  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.visible}>
        <View style={styles.viewModal}>
          <FlatList
            keyExtractor={item => item.value}
            renderItem={renderItem}
            data={listCookBook}
          />
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(ModalMyRecipe);
const styles = StyleSheet.create({
  visible: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  view: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewFlatList: {
    backgroundColor: colors.white,
    width: scale(300),
    height: scaleHeight(255),
    borderRadius: scale(10),
    padding: scale(20),
  },

  itemText: {
    fontFamily: FONT_SIZE.NORMAL,
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.black,
    marginTop: scaleHeight(10),
    paddingVertical: scaleHeight(7.5),
    borderRadius: scale(8),
    paddingLeft: scale(5),
  },
  viewModal: {
    width: scale(300),
    height: scale(150),
    backgroundColor: colors.white,
    borderRadius: scale(20),
    paddingTop: scaleHeight(12),
    paddingHorizontal: scale(20),
  },
});
