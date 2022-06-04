import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: scale(25),
    paddingTop: scale(25),
    backgroundColor: colors.white,
    flex: 1,
  },
  viewHeader: {
    marginTop: scaleHeight(15),
  },
  viewDropDown: {
    marginTop: scaleHeight(30),
    shadowColor: colors.black,
    elevation: 15,
    backgroundColor: colors.white,
    borderRadius: scale(10),
    flexDirection: 'row',
    padding: scale(15),
    justifyContent: 'space-between',
    marginBottom: scaleHeight(20),
  },
  textDropDown: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.black,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleHeight(100),
  },
});
export default styles;
