import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../utils';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageMain: {
    width: '100%',
    height: scaleHeight(358),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
  },
  buttonPlay: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8),
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderWidth: scale(1),
    borderColor: colors.white,
  },
  textCookNow: {
    color: colors.white,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.SMALL,
    paddingHorizontal: scale(3),
  },
  textInBackground: {
    bottom: 0,
    position: 'absolute',
    marginLeft: scale(25),
    marginBottom: scale(15),
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.X_LARGE,
    width: scale(300),
    color: colors.white,
  },
  headerBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  listImageDetail: {
    padding: scale(25),
    flexDirection: 'row',
  },
  imageSmall: {
    width: scale(103),
    height: scale(94),
    marginRight: scale(8),
  },
  imageSmallEnd: {
    width: scale(103),
    height: scale(94),

    justifyContent: 'center',
    alignItems: 'center',
  },
  textNumber: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.V_LARGE,
    color: colors.black,
  },
  imageOpacity: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  tabBar: {
    backgroundColor: colors.white,
    shadowColor: 'transparent',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTabView: {
    flex: 1,
    paddingHorizontal: scale(25),
  },

  textLabel: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    width: '100%',
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
