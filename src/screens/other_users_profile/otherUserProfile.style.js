import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  headerView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  view: {
    flex: 1,
    paddingHorizontal: scale(25),
    paddingTop: scaleHeight(25),
    backgroundColor: colors.white,
  },
  viewInfoUser: {
    marginTop: scaleHeight(30),
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    paddingBottom: scaleHeight(15),
  },
  viewTopInfo: {
    flexDirection: 'row',
  },
  imageUser: {
    width: scale(82),
    height: scale(82),
    marginRight: scale(15),
    borderRadius: scale(50),
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
  viewInfo: {
    justifyContent: 'space-between',
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
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  cusTomButton: {
    marginVertical: scaleHeight(15),
  },
});

export default styles;
