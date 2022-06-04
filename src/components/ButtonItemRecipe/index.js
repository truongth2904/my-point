import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {scale} from '../../utils';
import colors from '../../constants/colors';

const ButtonItemRecipe = ({title, IconComponent, iconName}) => {
  return (
    <View style={styles.borderButton}>
      <IconComponent name={iconName} size={scale(20)} />
      <Text>{title}</Text>
    </View>
  );
};

export default memo(ButtonItemRecipe);

const styles = StyleSheet.create({
  borderButton: {
    borderWidth: 1,
    borderColor: colors.success,
    borderRadius: scale(3),
  },
});
