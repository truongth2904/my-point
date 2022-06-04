import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../../utils';
import {FONT_FAMILY, FONT_SIZE} from './../../../constants/fonts';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  errorMessage: {
    color: colors.danger,
    marginTop: scale(4),
  },
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
    fontSize: FONT_SIZE.X_LARGE,
    fontFamily: FONT_FAMILY.BOLD,
  },
  textPlease: {
    color: '#606060',
    fontSize: FONT_SIZE.NORMAL,
    marginTop: scaleHeight(20),
    fontFamily: FONT_FAMILY.REGULAR,
    marginBottom: scaleHeight(8),
  },
  viewLogin: {
    marginHorizontal: scale(25),
    justifyContent: 'center',
  },
  textNewToScratch: {
    textAlign: 'center',
    marginTop: scaleHeight(30),
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.gray,
  },
  textButtonLoginHere: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.success,
  },
  buttonCreateAccount: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scaleHeight(6),
    marginBottom: scaleHeight(5),
  },
  viewCustomButton: {
    marginTop: scaleHeight(30),
  },
});

export default styles;
