import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const TextAndIcon = ({
  Icon,
  text,
  textIcon,
  onPressIcon,
  styleText,
  colorIcon,
}) => {
  return (
    <View style={styles.galleryHeader}>
      <Text style={[styles.textGallery, styleText]}>{text}</Text>

      {Icon ? (
        <TouchableOpacity onPress={onPressIcon}>
          <Icon
            color={!!colorIcon ? colorIcon : colors.success}
            name={textIcon}
            size={scale(22)}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default memo(TextAndIcon);

const styles = StyleSheet.create({
  galleryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textGallery: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.black,
  },
});
