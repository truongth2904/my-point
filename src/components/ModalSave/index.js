import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, memo} from 'react';
import colors from '../../constants/colors';
import {scale, scaleHeight} from '../../utils';
import TextAndIcon from '../TextAndIcon';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import Entypo from 'react-native-vector-icons/Entypo';

const ModalSave = ({modalVisible, listCookBook, onPressClose}) => {
  const [itemChoose, setItemChoose] = useState(1);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setItemChoose(item.id);
        onPressClose();
      }}>
      <Text
        style={[
          styles.itemText,
          item.id == itemChoose ? {backgroundColor: colors.success} : {},
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.view}>
        <View style={styles.viewFlatList}>
          <TextAndIcon
            onPressIcon={onPressClose}
            colorIcon={colors.black}
            styleText={styles.textTitleScreen}
            text={'Save to'}
            Icon={Entypo}
            textIcon={'cross'}
          />
          <FlatList
            keyExtractor={item => item.id}
            renderItem={renderItem}
            data={listCookBook}
          />
          <TouchableOpacity>
            <Text style={styles.textAddNew}>+ Add New Cookbook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default memo(ModalSave);

const styles = StyleSheet.create({
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
  textTitleScreen: {
    fontSize: FONT_SIZE.X_LARGE,
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
  textAddNew: {
    color: colors.success,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
  },
});
