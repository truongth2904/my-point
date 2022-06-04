import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../utils';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from './../../constants/fonts';

const styles = StyleSheet.create({
  view: {
    padding: scale(25),
    flex: 1,
  },
  viewScroll: {
    backgroundColor: colors.white,
  },
  textSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: scale(10),
    paddingHorizontal: scale(15),
    shadowColor: colors.black,
    elevation: 15,
  },
  textTrending: {
    color: colors.black,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    marginTop: scaleHeight(25),
  },
  textTrendingShowAll: {
    color: colors.success,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    marginTop: scaleHeight(25),
  },
  viewLine: {
    backgroundColor: colors.lightGrey,
    width: '100%',
    height: scaleHeight(1),
    marginTop: scaleHeight(25),
  },
  listTrendingRecipes: {
    marginTop: scaleHeight(20),
  },
  viewTextSearchRecipes: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewProfileList: {
    marginTop: scaleHeight(20),
  },
});

export default styles;
