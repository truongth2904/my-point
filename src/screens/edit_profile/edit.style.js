import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../utils';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from './../../constants/fonts';

const styles = StyleSheet.create({
  view: {
    padding: scale(20),
    flex: 1,
  },
  viewScroll: {
    backgroundColor: colors.white,
  },
  textTitleScreen: {
    fontFamily: FONT_FAMILY.BOLD,
    color: colors.black,
    fontSize: FONT_SIZE.X_LARGE,
    marginTop: scaleHeight(20),
  },
  imageUser: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
  },
  viewImage: {
    alignItems: 'center',
    marginTop: scaleHeight(20),
  },
  textEditImage: {
    marginTop: scaleHeight(10),
    alignItems: 'center',
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.success,
  },
  textTrending: {
    color: colors.black,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    marginTop: scaleHeight(25),
  },
  viewButton: {
    marginTop: scaleHeight(30),
  },
});

export default styles;
