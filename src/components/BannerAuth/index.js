import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, {memo} from 'react';
import {imageBackgroundLogin} from '../../assets/images';
import {scale, scaleHeight} from '../../utils';
import {logoScratch} from '../../assets/images';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';

const BannerAuth = ({text}) => {
  return (
    <ImageBackground
      style={styles.backgroundLogin}
      source={imageBackgroundLogin}
      imageStyle={styles.imageBg}>
      <View style={{flex: 1, marginTop: scale(50), width: scale(305)}}>
        <Image source={logoScratch} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.textWelcome}>{text}</Text>
      </View>
    </ImageBackground>
  );
};

export default memo(BannerAuth);

const styles = StyleSheet.create({
  backgroundLogin: {
    width: '100%',
    height: scaleHeight(285),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBg: {
    borderBottomRightRadius: scale(80),
  },
  textWelcome: {
    color: '#030F09',
    width: scale(305),
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.BOLD,
  },
});
