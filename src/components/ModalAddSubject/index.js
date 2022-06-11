import React, {memo, useState} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import colors from '../../constants/colors';
import {scale, scaleHeight} from '../../utils';

const ModalAddSubject = ({
  modalVisible,
  onPressCancel,
  onPressAdd,
  value,
  onChangeTextValue,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onPressCancel}
      visible={modalVisible}>
      <View style={styles.view}>
        <View style={styles.viewAdd}>
          <Text style={styles.title}>Thêm môn học</Text>
          <TextInput
            placeholder="Nhập tên môn học..."
            placeholderTextColor={colors.gray}
            style={styles.textInput}
            value={value}
            onChangeText={onChangeTextValue}
          />

          <View style={styles.viewButton}>
            <TouchableOpacity onPress={onPressCancel} style={styles.button}>
              <Text style={styles.textButton}>HỦY</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressAdd} style={styles.button}>
              <Text style={styles.textButton}>THÊM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default memo(ModalAddSubject);

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  viewAdd: {
    width: scale(210),
    height: scale(160),
    backgroundColor: colors.green,
    borderRadius: scale(20),
    overflow: 'hidden',
  },
  viewButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  textInput: {
    borderRadius: scale(10),
    borderWidth: 2,
    borderColor: colors.black,
    marginVertical: scale(20),
    marginHorizontal: scale(10),
    flex: 1,
    fontSize: scale(20),
  },
  button: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: colors.white,
    fontSize: scale(18),
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: scale(18),
    marginTop: scaleHeight(5),
  },
});
