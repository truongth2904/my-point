import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {scale, scaleHeight} from '../../utils';
import colors from '../../constants/colors';
import RadioButtonRN from 'radio-buttons-react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RadioForm from 'react-native-simple-radio-button';
import {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

let list = [
  {label: 'Hệ số 1', value: 0},
  {label: 'Hệ số 2', value: 1},
  {label: 'Hệ số 3', value: 2},
];
const ModalAddPoint = ({
  visible,
  value,
  onChangeText,
  onPressCancelModal,
  onPressAdd,
  coefficient,
  setCoefficient,
}) => {
  const onPress = value => {
    setCoefficient(value);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.view}>
        <View style={styles.modal}>
          <RadioForm animation={true} formHorizontal={true}>
            {list.map((obj, i) => (
              <RadioButton
                wrapStyle={styles.wrapStyle}
                labelHorizontal={true}
                key={i}>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={coefficient === i}
                  onPress={onPress}
                  borderWidth={scale(1)}
                  buttonSize={scale(10)}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={onPress}
                  labelStyle={styles.labelStyle}
                />
              </RadioButton>
            ))}
          </RadioForm>
          <Text style={styles.textPoint}>
            {'Điểm của bạn là: '}
            {parseFloat(value) + 1 - 1 || 0}
          </Text>

          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            value={value}
            onChangeText={onChangeText}
          />

          <View style={styles.viewButton}>
            <TouchableOpacity
              onPress={onPressCancelModal}
              style={styles.viewButton_}>
              <Text style={styles.textButton}>HỦY</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressAdd} style={styles.viewButton_}>
              <Text style={styles.textButton}>THÊM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(ModalAddPoint);

const styles = StyleSheet.create({
  modal: {
    width: scale(300),
    height: scale(200),
    backgroundColor: colors.white,
    padding: scale(10),
    borderRadius: scale(5),
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.viewModal,
  },
  labelStyle: {
    fontSize: scale(18),
    color: '#2ecc71',
  },
  wrapStyle: {
    justifyContent: 'space-between',
    flex: 1,
  },
  textInput: {
    borderWidth: scale(1),
    borderColor: colors.black,
    fontSize: scale(25),
    fontWeight: 'bold',
    color: colors.black,
    borderRadius: scale(5),
  },

  textButton: {
    color: colors.white,
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleHeight(35),
  },
  viewButton_: {
    backgroundColor: colors.green,
    width: scale(90),
    height: scaleHeight(35),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(5),
  },
  textPoint: {
    color: colors.red,
    fontSize: scale(15),
    marginTop: scaleHeight(10),
    marginBottom: scaleHeight(10),
  },
});
