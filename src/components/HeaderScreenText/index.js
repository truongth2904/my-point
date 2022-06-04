import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import colors from '../../constants/colors';
import IconAndText from './../IconAndText';

const HeaderScreenText = ({title, textIcon, nameIcon, Icon, onPressButton}) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.textTitleScreen}>{title}</Text>
      <IconAndText
        text={textIcon}
        Icon={Icon}
        nameIcon={nameIcon}
        onPress={onPressButton}
      />
    </View>
  );
};

export default memo(HeaderScreenText);

const styles = StyleSheet.create({
  textTitleScreen: {
    fontFamily: FONT_FAMILY.BOLD,
    color: colors.black,
    fontSize: FONT_SIZE.X_LARGE,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
