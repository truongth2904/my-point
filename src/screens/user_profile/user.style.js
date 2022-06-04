import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../utils';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: scale(25),
    flex: 1,
    paddingTop: scaleHeight(25),
    backgroundColor: colors.white,
  },
  textTitleScreen: {
    fontFamily: FONT_FAMILY.BOLD,
    color: colors.black,
    fontSize: FONT_SIZE.X_LARGE,
  },
  textSetting: {
    color: colors.success,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    marginLeft: scale(7),
  },
  touchSetting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewInfoUser: {
    marginTop: scaleHeight(30),
    flexDirection: 'row',
    paddingBottom: scaleHeight(25),
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    height: scaleHeight(107),
  },
  imageUser: {
    width: scale(82),
    height: scale(82),
    marginRight: scale(15),
    borderRadius: scale(50),
  },
  viewSkeleton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaleHeight(20),
  },
  viewInfoSkeleton: {
    width: scale(220),
    height: scaleHeight(80),
  },
  nameUser: {
    color: colors.black,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
  },
  rankUser: {
    color: colors.gray,
    fontSize: FONT_SIZE.NORMAL,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  viewNameIconEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  viewInfo: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  textLabel: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.LARGE,
  },
  bottomLabel: {
    backgroundColor: colors.success,
    height: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bottomLabel: {
    backgroundColor: colors.success,
    height: 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default styles;
