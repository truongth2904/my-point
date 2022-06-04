import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import colors from '../../constants/colors';
import {scale, scaleHeight} from '../../utils';
import {FONT_FAMILY} from '../../constants/fonts';

const CustomTextInput = ({
  title,
  placeholder,
  value,
  isPassWord,
  onChangeText,
  titleRight,
  textDanger,
}) => {
  return (
    <View style={styles.viewTextInput}>
      <View style={styles.viewTextTitle}>
        <Text style={styles.titleTextInput}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.titleTextInput}>
            {!!titleRight ? 'Forgot password?' : null}
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        value={value}
        secureTextEntry={isPassWord}
        style={styles.textInput}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'black'}
      />
      {!!textDanger ? <Text style={styles.isEmpty}>{textDanger}</Text> : null}
    </View>
  );
};

export default memo(CustomTextInput);

const styles = StyleSheet.create({
  titleTextInput: {
    color: '#A8A8A8',
    fontFamily: FONT_FAMILY.REGULAR,
  },
  isEmpty: {
    color: colors.danger,
    fontSize: scale(10),
    marginTop: scaleHeight(2),
  },
  viewTextInput: {
    marginTop: scaleHeight(30),
  },
  textInput: {
    color: '#030F09',
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: scaleHeight(15),
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
    margin: 0,
    padding: 0,
  },
  viewTextTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
