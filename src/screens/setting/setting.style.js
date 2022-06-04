import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  viewHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  touchSetting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSetting: {
    color: colors.success,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    marginLeft: scale(7),
  },
  textTitleScreen: {
    fontFamily: FONT_FAMILY.BOLD,
    color: colors.black,
    fontSize: FONT_SIZE.X_LARGE,
    marginTop: scaleHeight(20),
  },
  view: {
    padding: scale(20),
    backgroundColor: colors.white,
    flex:1
  },
  textNotification: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    marginTop: scaleHeight(26),
  },
  viewLine: {
    backgroundColor: colors.lightGrey,
    width: '100%',
    height: scaleHeight(1),
    marginTop: scaleHeight(20),
  },
  textContent: {
    padding: scale(10),
    backgroundColor: colors.lightGrey,
    borderRadius: scale(8),
  },
  textWhy: {
    color: colors.success,
    fontFamily: FONT_FAMILY.BOLD,
  },
  changePass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scaleHeight(30),
  },
  textChangePass: {
    color: colors.black,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
  },
});
export default styles;
