import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import Feather from 'react-native-vector-icons/Feather';
import {scale, scaleHeight} from '../../../../utils';
import {ButtonDashed, TextAndIcon} from '../../../../components';

const NewRecipe = ({text, textButton, onPressButton, style}) => {
  return (
    <View style={[styles.view, style]}>
      <TextAndIcon
        colorIcon={colors.black}
        textIcon={'edit-2'}
        Icon={Feather}
        text={text}
      />
      <ButtonDashed style={styles.button} text={textButton} />
    </View>
  );
};

export default React.memo(NewRecipe);

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
  },
  view: {
    padding: scale(15),
    borderRadius: scale(8),
  },
  button: {
    marginTop: scaleHeight(20),
  },
});
