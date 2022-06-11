import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FONT_SIZE} from '../../constants/fonts';
import colors from '../../constants/colors';
import {scale} from '../../utils';

const Header = ({title, onPress, onPressBack}) => {
  return (
    <View style={styles._view}>
      <View style={styles.view}>
        <TouchableOpacity onPress={onPressBack}>
          <Ionicons
            name="chevron-back"
            color={'black'}
            size={FONT_SIZE.X_LARGE}
          />
        </TouchableOpacity>

        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="add" color={'black'} size={FONT_SIZE.X_LARGE} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontSize: FONT_SIZE.X_LARGE,
    marginLeft: scale(10),
    fontWeight: 'bold',
  },
  _view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
